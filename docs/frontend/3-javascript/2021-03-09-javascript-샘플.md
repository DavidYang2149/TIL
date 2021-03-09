---
icon: ./images/2020-01-20-html-시작하기-icon-0.png
slug: 'javascript-샘플'
title: 'javascript 샘플'
main_category: Frontend
category: 3. javascript
author: davidyang2149
created_time: 2021-03-09
updated_time: 2021-03-09
---

You can write JSX and use React components within your Markdown thanks to [MDX](https://mdxjs.com/).

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!
