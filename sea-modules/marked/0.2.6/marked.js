define("#marked/0.2.6/marked",[],function(a,b,c){(function(){function d(a,c){return"!"!==a[0][0]?'<a href="'+k(c.href)+'"'+(c.title?' title="'+k(c.title)+'"':"")+">"+b.lexer(a[1])+"</a>":'<img src="'+k(c.href)+'" alt="'+k(a[1])+'"'+(c.title?' title="'+k(c.title)+'"':"")+">"}function g(){return f=e.pop()}function h(){switch(f.type){case"space":return"";case"hr":return"<hr>\n";case"heading":return"<h"+f.depth+">"+b.lexer(f.text)+"</h"+f.depth+">\n";case"code":return q.highlight&&(f.code=q.highlight(f.text,f.lang),null!=f.code&&f.code!==f.text&&(f.escaped=!0,f.text=f.code)),f.escaped||(f.text=k(f.text,!0)),"<pre><code"+(f.lang?' class="lang-'+f.lang+'"':"")+">"+f.text+"</code></pre>\n";case"blockquote_start":for(var a="";"blockquote_end"!==g().type;)a+=h();return"<blockquote>\n"+a+"</blockquote>\n";case"list_start":for(var c=f.ordered?"ol":"ul",a="";"list_end"!==g().type;)a+=h();return"<"+c+">\n"+a+"</"+c+">\n";case"list_item_start":for(var a="";"list_item_end"!==g().type;)a+="text"===f.type?i():h();return"<li>"+a+"</li>\n";case"loose_item_start":for(var a="";"list_item_end"!==g().type;)a+=h();return"<li>"+a+"</li>\n";case"html":return f.pre||q.pedantic?f.text:b.lexer(f.text);case"paragraph":return"<p>"+b.lexer(f.text)+"</p>\n";case"text":return"<p>"+i()+"</p>\n"}}function i(){for(var c,a=f.text;(c=e[e.length-1])&&"text"===c.type;)a+="\n"+g().text;return b.lexer(a)}function j(a){e=a.reverse();for(var b="";g();)b+=h();return e=null,f=null,b}function k(a,b){return a.replace(b?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(a){for(var e,b="",c=a.length,d=0;c>d;d++)e=a.charCodeAt(d),Math.random()>.5&&(e="x"+e.toString(16)),b+="&#"+e+";";return b}function m(){var a="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|@)\\b";return a}function n(a,b){return a=a.source,b=b||"",function c(d,e){return d?(e=e.source||e,e=e.replace(/(^|[^\[])\^/g,"$1"),a=a.replace(d,e),c):RegExp(a,b)}}function o(){}function p(b,c){return s(c),j(a.lexer(b))}function s(c){c||(c=r),q!==c&&(q=c,q.gfm?(a.fences=a.gfm.fences,a.paragraph=a.gfm.paragraph,b.text=b.gfm.text,b.url=b.gfm.url):(a.fences=a.normal.fences,a.paragraph=a.normal.paragraph,b.text=b.normal.text,b.url=b.normal.url),q.pedantic?(b.em=b.pedantic.em,b.strong=b.pedantic.strong):(b.em=b.normal.em,b.strong=b.normal.strong))}var a={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:o,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,lheading:/^([^\n]+)\n *(=|-){3,} *\n*/,blockquote:/^( *>[^\n]+(\n[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,def:/^ *\[([^\]]+)\]: *([^\s]+)(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,paragraph:/^([^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+\n*/,text:/^[^\n]+/};a.bullet=/(?:[*+-]|\d+\.)/,a.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,a.item=n(a.item,"gm")(/bull/g,a.bullet)(),a.list=n(a.list)(/bull/g,a.bullet)("hr",/\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/)(),a.html=n(a.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,m())(),a.paragraph=n(a.paragraph)("hr",a.hr)("heading",a.heading)("lheading",a.lheading)("blockquote",a.blockquote)("tag","<"+m())("def",a.def)(),a.normal={fences:a.fences,paragraph:a.paragraph},a.gfm={fences:/^ *(`{3,}|~{3,}) *(\w+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,paragraph:/^/},a.gfm.paragraph=n(a.paragraph)("(?!","(?!"+a.gfm.fences.source.replace("\\1","\\2")+"|")(),a.lexer=function(b){var c=[];return c.links={},b=b.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),a.token(b,c,!0)},a.token=function(b,c,d){for(var e,f,g,h,i,j,k,b=b.replace(/^ +$/gm,"");b;)if((g=a.newline.exec(b))&&(b=b.substring(g[0].length),g[0].length>1&&c.push({type:"space"})),g=a.code.exec(b))b=b.substring(g[0].length),g=g[0].replace(/^ {4}/gm,""),c.push({type:"code",text:q.pedantic?g:g.replace(/\n+$/,"")});else if(g=a.fences.exec(b))b=b.substring(g[0].length),c.push({type:"code",lang:g[2],text:g[3]});else if(g=a.heading.exec(b))b=b.substring(g[0].length),c.push({type:"heading",depth:g[1].length,text:g[2]});else if(g=a.lheading.exec(b))b=b.substring(g[0].length),c.push({type:"heading",depth:"="===g[2]?1:2,text:g[1]});else if(g=a.hr.exec(b))b=b.substring(g[0].length),c.push({type:"hr"});else if(g=a.blockquote.exec(b))b=b.substring(g[0].length),c.push({type:"blockquote_start"}),g=g[0].replace(/^ *> ?/gm,""),a.token(g,c,d),c.push({type:"blockquote_end"});else if(g=a.list.exec(b)){for(b=b.substring(g[0].length),c.push({type:"list_start",ordered:isFinite(g[2])}),g=g[0].match(a.item),e=!1,k=g.length,j=0;k>j;j++)h=g[j],i=h.length,h=h.replace(/^ *([*+-]|\d+\.) +/,""),~h.indexOf("\n ")&&(i-=h.length,h=q.pedantic?h.replace(/^ {1,4}/gm,""):h.replace(RegExp("^ {1,"+i+"}","gm"),"")),f=e||/\n\n(?!\s*$)/.test(h),j!==k-1&&(e="\n"===h[h.length-1],f||(f=e)),c.push({type:f?"loose_item_start":"list_item_start"}),a.token(h,c),c.push({type:"list_item_end"});c.push({type:"list_end"})}else(g=a.html.exec(b))?(b=b.substring(g[0].length),c.push({type:q.sanitize?"paragraph":"html",pre:"pre"===g[1],text:g[0]})):d&&(g=a.def.exec(b))?(b=b.substring(g[0].length),c.links[g[1].toLowerCase()]={href:g[2],title:g[3]}):d&&(g=a.paragraph.exec(b))?(b=b.substring(g[0].length),c.push({type:"paragraph",text:g[0]})):(g=a.text.exec(b))&&(b=b.substring(g[0].length),c.push({type:"text",text:g[0]}));return c};var b={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:o,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)([\s\S]*?[^`])\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};b._linkInside=/(?:\[[^\]]*\]|[^\]]|\](?=[^\[]*\]))*/,b._linkHref=/\s*<?([^\s]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,b.link=n(b.link)("inside",b._linkInside)("href",b._linkHref)(),b.reflink=n(b.reflink)("inside",b._linkInside)(),b.normal={url:b.url,strong:b.strong,em:b.em,text:b.text},b.pedantic={strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/},b.gfm={url:/^(https?:\/\/[^\s]+[^.,:;"')\]\s])/,text:/^[\s\S]+?(?=[\\<!\[_*`]|https?:\/\/| {2,}\n|$)/},b.lexer=function(a){for(var g,h,i,j,c="",f=e.links;a;)if(j=b.escape.exec(a))a=a.substring(j[0].length),c+=j[1];else if(j=b.autolink.exec(a))a=a.substring(j[0].length),"@"===j[2]?(h=":"===j[1][6]?l(j[1].substring(7)):l(j[1]),i=l("mailto:")+h):(h=k(j[1]),i=h),c+='<a href="'+i+'">'+h+"</a>";else if(j=b.url.exec(a))a=a.substring(j[0].length),h=k(j[1]),i=h,c+='<a href="'+i+'">'+h+"</a>";else if(j=b.tag.exec(a))a=a.substring(j[0].length),c+=q.sanitize?k(j[0]):j[0];else if(j=b.link.exec(a))a=a.substring(j[0].length),c+=d(j,{href:j[2],title:j[3]});else if((j=b.reflink.exec(a))||(j=b.nolink.exec(a))){if(a=a.substring(j[0].length),g=(j[2]||j[1]).replace(/\s+/g," "),g=f[g.toLowerCase()],!g||!g.href){c+=j[0][0],a=j[0].substring(1)+a;continue}c+=d(j,g)}else(j=b.strong.exec(a))?(a=a.substring(j[0].length),c+="<strong>"+b.lexer(j[2]||j[1])+"</strong>"):(j=b.em.exec(a))?(a=a.substring(j[0].length),c+="<em>"+b.lexer(j[2]||j[1])+"</em>"):(j=b.code.exec(a))?(a=a.substring(j[0].length),c+="<code>"+k(j[2],!0)+"</code>"):(j=b.br.exec(a))?(a=a.substring(j[0].length),c+="<br>"):(j=b.text.exec(a))&&(a=a.substring(j[0].length),c+=k(j[0]));return c};var e,f;o.exec=o;var q,r;p.options=p.setOptions=function(a){return r=a,s(a),p},p.setOptions({gfm:!0,pedantic:!1,sanitize:!1,highlight:null}),p.parser=function(a,b){return s(b),j(a)},p.lexer=function(b,c){return s(c),a.lexer(b)},p.parse=p,c!==void 0?c.exports=p:this.marked=p}).call(function(){return this||("undefined"!=typeof window?window:global)}())});