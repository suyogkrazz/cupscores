export default ({ app }) => {
  // Get localized path for homepage
  const localePath = app.localePath("index");

  const switchLocalePath = lang => app.switchLocalePath(lang);
};
