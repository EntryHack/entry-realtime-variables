# entry-cloud-variables

[NPM에서 보기](https://www.npmjs.com/package/entry-cloud-variables)

엔트리 실시간 변수/리스트를 JS/TS로 마음껏 다뤄보세요.

```ts
import CloudVariableClient from 'entry-cloud-variables';

const client = new CloudVariableClient('작품 아이디');

await client.login('아이디', '비번');
await client.connect();

client.setVariable('값 변경할 실시간 변수 아이디 (작품 정보 API 등으로 알아낼 수 있음)', '변경할 값 (string, number, boolean)');
```
