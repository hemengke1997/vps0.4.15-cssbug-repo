Bug reproduction.

```bash
git clone git@github.com:hemengke1997/vps0.4.15-cssbug-repo
cd vps0.4.15-cssbug-repo/
pnpm install
pnpm run dev
```


```shell
git clone git@github.com:hemengke1997/vps0.4.15-cssbug-repo && cd vps-antd-repo/ && pnpm install && pnpm run start
```

Got to [localhost:3000](http://localhost:3000), then you will find css asests error from browser

Bug origin: https://github.com/brillout/vite-plugin-ssr/blob/main/vite-plugin-ssr/node/retrievePageAssets.ts#L118


```
System:
  OS: Windows 10 10.0.22000
  CPU: (16) x64 Intel(R) Core(TM) i7-10700F CPU @ 2.90GHz
  Memory: 4.97 GB / 23.78 GB
```

