import { IStoryDSL } from "@visactor/vstory";
import type { SchemaAction } from "schema";

export class Algorithm {
  private acts: IStoryDSL["acts"] = [];
  private characters: IStoryDSL["characters"] = [];

  constructor(private array: number[]) {}
}
