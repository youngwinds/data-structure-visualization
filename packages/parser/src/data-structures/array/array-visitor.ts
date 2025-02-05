import * as babel from "@babel/core";
import * as t from "@babel/types";

export const arrayVisitor = {
  visitor: {
    // 处理所有数组字面量初始化
    ArrayExpression(path: babel.NodePath<t.ArrayExpression>) {
      // 避免重复处理已转换的数组
      if ((path.node as any).wasConverted) {
        return;
      }

      // 检查父节点是否为 __proxyCall 的参数
      const parent = path.parentPath;
      if (parent.isCallExpression()) {
        const callee = parent.node.callee;
        if (
          t.isMemberExpression(callee) &&
          t.isIdentifier(callee.property, { name: "__proxyCall" })
        ) {
          // 如果是 __proxyCall 的参数，跳过转换
          return;
        }
      }

      // 创建内部数组时标记为已转换
      const innerArray = t.arrayExpression(path.node.elements);
      (innerArray as any).wasConverted = true;

      // 创建 new ArrayProxy([...elements], schema)
      const newArray = t.newExpression(t.identifier("ArrayProxy"), [
        innerArray, // 已标记的内部数组
        t.identifier("__GlobalContext__"), // 全局配置
      ]);

      path.replaceWith(newArray);
    },

    // 处理数组方法调用（如 arr.push()）
    CallExpression(path: babel.NodePath<t.CallExpression>) {
      const { node } = path;
      if (
        t.isMemberExpression(node.callee) &&
        t.isIdentifier(node.callee.property) &&
        [
          "push",
          "pop",
          "shift",
          "unshift",
          "splice",
          "sort",
          "reverse",
          "concat",
        ].includes(node.callee.property.name)
      ) {
        const proxyCall = t.callExpression(
          t.memberExpression(node.callee.object, t.identifier("__proxyCall")),
          [
            t.stringLiteral(node.callee.property.name),
            t.arrayExpression(
              node.arguments.filter(
                (arg): arg is t.Expression | t.SpreadElement =>
                  t.isExpression(arg) || t.isSpreadElement(arg)
              )
            ),
          ]
        );
        path.replaceWith(proxyCall);
      }
    },

    // 处理数组索引赋值（如 arr[i] = val）
    AssignmentExpression(path: babel.NodePath<t.AssignmentExpression>) {
      const { node } = path;
      if (
        t.isMemberExpression(node.left) &&
        t.isIdentifier(node.left.object) &&
        t.isNumericLiteral(node.left.property)
      ) {
        // 转换为 arr.__proxySet(index, value)
        const proxySet = t.callExpression(
          t.memberExpression(node.left.object, t.identifier("__proxySet")),
          [node.left.property, node.right]
        );
        path.replaceWith(proxySet);
      }
    },

    // 处理数组索引读取（如 arr[i]）
    MemberExpression(path: babel.NodePath<t.MemberExpression>) {
      const { node } = path;
      if (
        t.isIdentifier(node.object) &&
        t.isNumericLiteral(node.property) &&
        !path.parentPath.isAssignmentExpression()
      ) {
        // 转换为 arr.__proxyGet(index)
        const proxyGet = t.callExpression(
          t.memberExpression(node.object, t.identifier("__proxyGet")),
          [node.property]
        );
        path.replaceWith(proxyGet);
      }
    },
  },
};
