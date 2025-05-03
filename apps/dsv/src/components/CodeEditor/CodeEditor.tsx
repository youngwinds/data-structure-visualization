import { useCallback, useState } from 'react';
import { run } from 'parser';
import { useDsv } from '../../model';
import { OpenAI } from 'openai';
import { Button, Input } from 'antd';
import { systemPrompt } from './constant';
import { CodeContainer, Toolbar, CodeInput } from './style';

const S = {
  CodeContainer,
  Toolbar,
  CodeInput,
};

export const CodeEditor = () => {
  const setSchema = useDsv((state) => state.setSchema);

  const [apiKey, setApiKey] = useState<string>(process.env.API_KEY as string);
  const [model, setModel] = useState<string>(process.env.MODEL as string);

  const [userPrompt, setUserPrompt] = useState(`生成冒泡排序`);
  const [isGenerating, setIsGenerating] = useState(false);
  const [code, setCode] = useState(`function bubbleSort(arr) {
  Array.prototype.swap = function(i, j) {
    var temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  };

  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        arr.swap(j, j + 1);
      }
    }
  }
  return arr;
}

// 执行函数, 并给出测试用例
const result = bubbleSort([5, 3, 8, 4, 2]);
console.log(result);`);

  const handleExec = useCallback(
    (code: string) => {
      const result = run(code);
      setSchema(result.schema);
    },
    [code],
  );

  const handleGenerateCode = async () => {
    setIsGenerating(true);
    try {
      const client = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey,
        dangerouslyAllowBrowser: true,
      });

      const completion = await client.chat.completions.create({
        model,
        messages: [
          {
            role: 'system',
            content: systemPrompt,
          },
          {
            role: 'user',
            content: userPrompt,
          },
        ],
        temperature: 0.7,
      });

      setCode(completion.choices[0].message.content || '');
    } catch (error) {
      alert('生成失败，请检查API配置');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <S.CodeContainer>
      <S.Toolbar>
        <Input.TextArea
          autoSize={{ minRows: 1, maxRows: 6 }}
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          placeholder="输入算法需求..."
          style={{
            width: '100%',
          }}
        />

        <Button
          onClick={handleGenerateCode}
          disabled={isGenerating}
          loading={isGenerating}
        >
          {isGenerating ? '生成中...' : '智能生成'}
        </Button>

        <Button onClick={() => handleExec(code)}>执行</Button>
      </S.Toolbar>
      <S.CodeInput>
        <Input.TextArea
          size="small"
          style={{
            height: 'auto',
            fontFamily: 'monospace',
          }}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </S.CodeInput>
    </S.CodeContainer>
  );
};
