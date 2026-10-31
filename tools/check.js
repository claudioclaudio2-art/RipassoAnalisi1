// Carica tutti i file lezione, controlla struttura e rende ogni formula con KaTeX.
const fs=require('fs'), path=require('path');
const katex=require('/opt/npm-tools/node_modules/katex');
const dir=process.argv[2];
global.LEZIONI=[]; global.R=String.raw; global.L=x=>LEZIONI.push(x);
const files=fs.readdirSync(dir).filter(f=>/^\d{4}-\d\d-\d\d\.js$/.test(f)).sort();
for(const f of files){ const src=fs.readFileSync(path.join(dir,f),'utf8');
  if(src.includes('${')) console.log('ATTENZIONE ${ in',f);
  try{ eval(src) }catch(e){ console.log('ERRORE JS',f,e.message) } }
const macros={};
let n=0,err=0,ids=new Set();
const TIPI=['def','teo','prop','cor','lemma','oss','es','att'];
function check(txt,where){ if(!txt) return;
  const re=/\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g; let m;
  const stripped=txt.replace(re,'');
  if(stripped.includes('$')) {console.log('DOLLARO SPAIATO',where); err++;}
  while((m=re.exec(txt))){ n++; const tex=m[1]||m[2];
    try{ katex.renderToString(tex,{displayMode:!!m[1],throwOnError:true,macros}) }
    catch(e){ err++; console.log('KATEX',where,'::',e.message.slice(0,140)) } } }
for(const l of LEZIONI){ for(const [i,v] of l.voci.entries()){
  const w=l.data+' #'+i+' '+(v.titolo||'').slice(0,40);
  if(!TIPI.includes(v.t)) console.log('TIPO?',w);
  if(!v.titolo||!v.testo) console.log('MANCA',w);
  if(/\$/.test(v.titolo) && !/\\/.test(v.titolo) && /[a-z]{4,}/.test(v.titolo.replace(/\$[^$]*\$/g,''))===false) {}
  check(v.titolo,w+' [titolo]'); check(v.testo,w); check(v.dim,w+' [dim]'); }}
console.log(files.length,'lezioni,',LEZIONI.reduce((a,l)=>a+l.voci.length,0),'voci,',n,'formule,',err,'errori');
