const importDefault = (this && this.importDefault) || function (mod) {
  return (mod && mod.esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const express1 = importDefault(require('express'));

const app = express1.default();
app.listen(3001, () => {
  console.log('Server running...');
});
