
import Variant from '../variants/variant';

export default class Parser {

  private source: string;
  private parsed: any;

  public parse(input: string) {
    this.source = input;
    const tokenized = this.tokenizer();
  }

  private tokenizer() {
    const lines: string[] = this.splitToLines(this.source);
    // const tokens = lines
    //   .map(line => line.match(/\S+/g) || []);
  }

  private splitToLines(source: string) {
    return source
      .split(/\r?\n/);
  }
}
