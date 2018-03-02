import { AppPage } from "./app.po";

describe("Tour of Heroes", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should load application", async () => {
    await page.navigateTo();
    expect(page.getRouterOutlet()).toBeTruthy();
  });
});
