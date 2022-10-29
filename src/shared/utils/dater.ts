export abstract class DateBuilder {
  private readonly _attr = "";

  public static date(): string {
    const currentDate = new Date();
    return `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
  }

  public static time(): string {
    const currentDate = new Date();
    return `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
  }

  public static full(): string {
    return `${DateBuilder.date()}@${DateBuilder.time()}`;
  }
}
