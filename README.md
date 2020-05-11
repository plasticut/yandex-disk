# Yandex Disk Api

Example:

```js
import { YDisk } from "@plasticut/yandex-disk";

const token = 'your oauth token';

async function main() {
  const ydisk = new YDisk(token);

  const resource = await ydisk.getResource({ query: { path: 'disk:/', limit: 1 } });

  if (resource._embedded) {
    for (const item of resource._embedded.items) {
      console.dir(item));
    }
  }
}

main();
```

Output:

```json
{
  "name": "Backups",
  "exif": {},
  "created": "2020-02-16T12:34:33+00:00",
  "resource_id": "526892156:753bbe9b155943798d58e56300c0feed7544b9695f2947f7a14e55ccc5a5aab3",
  "modified": "2020-02-16T12:34:33+00:00",
  "path": "disk:/Backups",
  "comment_ids": {
    "private_resource": "526892156:753bbe9b155943798d58e56300c0feed7544b9695f2947f7a14e55ccc5a5aab3",
    "public_resource": "526892156:753bbe9b155943798d58e56300c0feed7544b9695f2947f7a14e55ccc5a5aab3"
  },
  "type": "dir",
  "revision": 1581856510487192
}
```
