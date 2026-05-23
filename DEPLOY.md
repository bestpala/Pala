# 部署指南

## 1. 推送到 GitHub

本地已提交到 `main` 分支。在 GitHub 创建仓库后执行：

1. 打开 https://github.com/new
2. Repository name：`pala-site`（或你喜欢的名字）
3. 选择 **Public**，**不要**勾选 “Add a README”
4. 创建后，将下面的 `YOUR_USERNAME` 换成你的 GitHub 用户名：

```bash
cd C:\Users\pala\pala-site

# 若已添加过错误的 remote，先删除：
git remote remove origin

git remote add origin https://github.com/YOUR_USERNAME/pala-site.git
git push -u origin main
```

## 2. 连接 Vercel

1. 打开 https://vercel.com/new
2. 使用 GitHub 登录，**Import** 刚推送的 `pala-site` 仓库
3. Framework Preset 会自动识别为 **Next.js**，无需改构建命令
4. 点击 **Deploy**

## 3. 绑定域名 pala.cn

1. Vercel 项目 → **Settings** → **Domains**
2. 添加 `pala.cn` 和 `www.pala.cn`
3. 按 Vercel 提示在域名 DNS 添加记录（通常 A / CNAME 指向 Vercel）

## 4. 环境变量（可选）

当前站点不依赖环境变量。若后续添加分析等，在 Vercel **Environment Variables** 中配置。
