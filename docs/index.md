---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Tbed"
  text: ""
  tagline: 一个基于 Cloudflare Pages/Functions 构建的在线共享图片站。支持图片上传、主页展示与分享、点赞统计、热门/最新分类、分页浏览，以及带密码的管理员后台（删除、修改点赞、开关上传与过滤、选择过滤账号）。
  image: /img/tg.png
  actions:
    - theme: brand
      text: Start
      link: /start
    - theme: alt
      text: Follow in YouTube
      link: https://www.youtube.com/@CNBigJackson

---

<div style="background:transparent;padding:32px 0;border-radius:32px;">
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:24px;max-width:1200px;margin:0 auto;">
    <div class="home-feature-card" style="padding:28px;border-radius:24px;backdrop-filter:blur(16px);">
      <div style="width:56px;height:56px;margin-bottom:18px;display:flex;align-items:center;justify-content:center;border-radius:16px;background:rgba(96,165,250,.16);">
        <img src="/img/tg.png" alt="图标" style="width:28px;height:28px;" />
      </div>
      <h3 style="margin:0 0 12px;font-size:1.18rem;">快速搭建</h3>
      <p style="margin:0;line-height:1.75;">用 Cloudflare + Github即可搭建出该项目。</p>
    </div>
    <div class="home-feature-card" style="padding:28px;border-radius:24px;backdrop-filter:blur(16px);">
      <div style="width:56px;height:56px;margin-bottom:18px;display:flex;align-items:center;justify-content:center;border-radius:16px;background:rgba(34,197,94,.16);">
        <img src="/img/tg.png" alt="图标" style="width:28px;height:28px;" />
      </div>
      <h3 style="margin:0 0 12px;font-size:1.18rem;">支持分享</h3>
      <p style="margin:0;line-height:1.75;">支持图片分享、点赞统计、热门与最新分类浏览。</p>
    </div>
    <div class="home-feature-card" style="padding:28px;border-radius:24px;backdrop-filter:blur(16px);">
      <div style="width:56px;height:56px;margin-bottom:18px;display:flex;align-items:center;justify-content:center;border-radius:16px;background:rgba(251,191,36,.16);">
        <img src="/img/tg.png" alt="图标" style="width:28px;height:28px;" />
      </div>
      <h3 style="margin:0 0 12px;font-size:1.18rem;">安全管理</h3>
      <p style="margin:0;line-height:1.75;">提供密码保护后台，可删除内容、修改点赞、开关上传与过滤功能。</p>
    </div>
  </div>
</div>

