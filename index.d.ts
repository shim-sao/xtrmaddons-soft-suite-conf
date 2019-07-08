declare class Config {
  public static secret_key: string;
  public static filename: string;
  public static rootDir: string;
  public static app?: string;
  public static nodenv: string;
  public static nodenvprfx: string;
  public static get(key?: string, callback?: any): any;
  public static set(key: string, value: any, callback?: any): any;
  public static save(callback?: any): void;
  public static initialize(): void;
}
export = Config;
