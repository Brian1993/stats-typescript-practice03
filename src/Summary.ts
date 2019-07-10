import { Analyzer } from "./inteface/Analyzer";
import { OutputTarget } from "./inteface/OutputTarget";

export class Summary {
  constructor(
    public analyer: Analyzer, 
    public outputTarget: OutputTarget
  ) {}
 
}