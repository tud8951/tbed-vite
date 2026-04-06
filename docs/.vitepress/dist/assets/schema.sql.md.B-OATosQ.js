import{_ as a,o as e,c as n,ai as i}from"./chunks/framework.8XgXCEzo.js";const _=JSON.parse('{"title":"D1数据初始化代码","description":"","frontmatter":{},"headers":[],"relativePath":"schema.sql.md","filePath":"schema.sql.md"}'),t={name:"schema.sql.md"};function l(p,s,c,r,d,o){return e(),n("div",null,[...s[0]||(s[0]=[i(`<h1 id="d1数据初始化代码" tabindex="-1">D1数据初始化代码 <a class="header-anchor" href="#d1数据初始化代码" aria-label="Permalink to “D1数据初始化代码”">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>CREATE TABLE IF NOT EXISTS images (</span></span>
<span class="line"><span>  id TEXT PRIMARY KEY,</span></span>
<span class="line"><span>  url TEXT NOT NULL,</span></span>
<span class="line"><span>  ts INTEGER NOT NULL,</span></span>
<span class="line"><span>  likes INTEGER NOT NULL DEFAULT 0</span></span>
<span class="line"><span>);</span></span></code></pre></div>`,2)])])}const T=a(t,[["render",l]]);export{_ as __pageData,T as default};
