(function() {
    if (document.getElementById('nebula-master-panel')) return;

    // --- 1. CORE ENGINE ---
    const css = (id, str) => {
        if(document.getElementById(id)) return;
        const s = document.createElement('style');
        s.id = id; s.textContent = str; document.head.appendChild(s);
    };
    const walk = (fn) => {
        const w = document.createTreeWalker(document.body, 4, null, false);
        let n; while (n = w.nextNode()) {
            if (n.parentElement && ['SCRIPT','STYLE','NOSCRIPT'].includes(n.parentElement.tagName)) continue;
            if (n.nodeValue.trim() !== '') n.nodeValue = fn(node.nodeValue);
        }
    };
    const q = (sel) => document.querySelectorAll(sel);

    // --- 2. THE 160-POWER ARSENAL ---
    const payloads = [
        // 🔥 3 MASTERMIND SIGNATURES
        { id: 'kusarigama', name: '🗡️ KUSARIGAMA KATANA (Rip Page)', action: () => {
            css('nb-blade', `* { cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'><text y='40' font-size='40' transform='rotate(-45 24 24)'>🗡️</text></svg>") 0 0, auto !important; } .nb-rip-left, .nb-rip-right { position:fixed; pointer-events:none; z-index:999998; transition: transform 0.8s, opacity 0.8s; }`);
            document.addEventListener('click', e => {
                if (e.target.closest('#nebula-master-panel')) return;
                const t = e.target; const r = t.getBoundingClientRect();
                const l = t.cloneNode(true); const rw = t.cloneNode(true);
                l.className = 'nb-rip-left'; rw.className = 'nb-rip-right';
                const s = `top:${r.top+window.scrollY}px;left:${r.left+window.scrollX}px;width:${r.width}px;height:${r.height}px;`;
                l.style.cssText = s + `clip-path:inset(0 ${r.width/2}px 0 0);`; rw.style.cssText = s + `clip-path:inset(0 0 0 ${r.width/2}px);`;
                document.body.appendChild(l); document.body.appendChild(rw); t.style.visibility = 'hidden';
                setTimeout(() => { l.style.transform = 'translate(-150px, 100px) rotate(-30deg)'; rw.style.transform = 'translate(150px, 100px) rotate(30deg)'; l.style.opacity = '0'; rw.style.opacity = '0'; setTimeout(() => { l.remove(); rw.remove(); t.remove(); }, 800); }, 10);
            }, true);
        }},
        { id: 'madron', name: '😡 MADRON HUTCHERSON', action: () => {
            const a = new Audio('https://raw.githubusercontent.com/FreshAssassin/Project-Nebula/main/lv_0_20260317155018.mp3'); a.loop = true; a.play().catch(e=>console.log("Click page to play audio."));
            css('madron-css', 'img { opacity: 0; transition: opacity 4s ease-in !important; }');
            q('img').forEach(i => { i.src = 'https://raw.githubusercontent.com/FreshAssassin/Project-Nebula/main/c6efcb98-b4dd-484f-88ce-31d3f6b123e5.jpg'; i.srcset = ''; setTimeout(() => { i.style.opacity = '1'; }, 100); });
        }},
        { id: 'struycken', name: '🕴️ CAREY STRUYCKEN BAIT', action: () => {
            setInterval(() => { 
                const d = document.createElement('img'); d.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKHJt4uQwKTyCN9LGw3OCpejnWCPN7oXLMWAHLvHg7w6C2R4g7JiCR_VAgWAKd4YHnth0ZePIt9McveRmCdWMr4peIDn-w_P-3CIpQuBXmP5Bo-pGivXJxNAu1q1n_D3AS2Q&s=10'; 
                const size = Math.random() * 600 + 50; const tilt = Math.random() * 60 - 30; 
                d.style.cssText = `position:fixed; top:${Math.random()*80}%; left:${Math.random()*80}%; width:${size}px; transform:rotate(${tilt}deg); z-index:2147483647; border:${size/40}px solid #ff0055; pointer-events:none; box-shadow:0 0 30px #ff0055;`; 
                document.body.appendChild(d); setTimeout(() => d.remove(), 2500); 
            }, 3500);
        }},

        // 🌟 THE ORIGINAL 60 POWERS (Untouched v7)
        { id: 'customText', name: '🔥 INJECT CUSTOM TEXT', action: () => { const t = document.getElementById('nebula-custom-text').value || 'FreshAssassin'; walk(() => t); }},
        { id: 'customImg', name: '🔥 INJECT CUSTOM IMAGE', action: () => { const u = document.getElementById('nebula-custom-img').value || 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Nicolas_Cage_Deauville_2013.jpg'; q('img').forEach(i => { i.src = u; i.srcset = ''; i.style.objectFit = 'cover'; }); }},
        { id: 'purge', name: '💀 VISUAL DOM PURGE', action: () => { document.body.replaceChildren(); document.body.style.background = 'black'; const m = document.createElement('h1'); m.textContent = 'TARGET NEUTRALIZED BY FreshAssassin.'; m.style.cssText = 'color:#ff0055;text-align:center;margin-top:40vh;font-family:monospace;font-size:3em;'; document.body.appendChild(m); } },
        { id: 'tabHijack', name: '📑 Tab Renamer', action: () => setInterval(() => { document.title = document.title === 'HACKED BY FreshAssassin' ? 'YOUR PC IS MINE' : 'HACKED BY FreshAssassin'; }, 500) },
        { id: 'ransomware', name: '💀 Fake Ransomware', action: () => { const d=document.createElement('div'); d.style.cssText='position:fixed;top:0;left:0;width:100vw;height:100vh;background:red;z-index:9999999;display:flex;flex-direction:column;align-items:center;justify-content:center;color:white;font-family:sans-serif;'; d.innerHTML='<h1 style="font-size:5em;margin:0">SYSTEM LOCKED</h1><p style="font-size:2em">Send V-Bucks to FreshAssassin.</p>'; document.body.appendChild(d); } },
        { id: 'bsod', name: '💀 Fake Blue Screen', action: () => { const d=document.createElement('div'); d.style.cssText='position:fixed;top:0;left:0;width:100vw;height:100vh;background:#0000aa;z-index:9999999;color:white;font-family:monospace;padding:50px;font-size:24px;'; d.innerHTML='A fatal exception 0E has occurred...<br><br>Press any key to continue _'; document.body.appendChild(d); } },
        { id: 'virusPopups', name: '⚠️ Fake Virus Popups', action: () => setInterval(() => { const d=document.createElement('div'); d.style.cssText=`position:fixed;top:${Math.random()*90}vh;left:${Math.random()*90}vw;background:red;color:white;padding:15px;z-index:99999;border:3px solid yellow;font-weight:bold;font-family:sans-serif;box-shadow:5px 5px 0 black;`; d.textContent='⚠️ VIRUS DETECTED!'; document.body.appendChild(d); setTimeout(()=>d.remove(), 2500); }, 800) },
        { id: 'fakeLoading', name: '⏳ Fake System Update', action: () => { const d=document.createElement('div'); d.style.cssText='position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-size:4vw;color:white;background:#0055ff;padding:40px;z-index:999999;font-family:sans-serif;text-align:center;'; d.textContent='SYSTEM UPDATING... DO NOT TURN OFF.'; document.body.appendChild(d); } },
        { id: 'flashbang', name: '💥 Flashbang', action: () => { const d=document.createElement('div'); d.style.cssText='position:fixed;top:0;left:0;width:100vw;height:100vh;background:white;z-index:9999999;transition:opacity 5s;'; document.body.appendChild(d); setTimeout(()=>d.style.opacity=0, 100); setTimeout(()=>d.remove(), 5100); } },
        { id: 'captcha', name: '🤖 Evading Captcha', action: () => { const d=document.createElement('button'); d.style.cssText='position:fixed;top:50%;left:50%;padding:20px;font-size:20px;z-index:999999;background:white;border:2px solid #ccc;cursor:pointer;'; d.textContent='☑ I am not a robot'; d.onmouseover = () => { d.style.top=Math.random()*80+'vh'; d.style.left=Math.random()*80+'vw'; }; document.body.appendChild(d); } },
        { id: 'gravity', name: '🪐 CSS Gravity', action: () => q('p, img, div, h1, button').forEach(el => { el.style.transition = 'transform ' + (Math.random() * 3 + 1) + 's ease-in'; el.style.transform = `translateY(150vh) rotate(${Math.random() * 90 - 45}deg)`; }) },
        { id: 'barrelRoll', name: '🔄 Barrel Roll', action: () => { document.body.style.transition = 'transform 4s ease-in-out'; document.body.style.transform = 'rotate(360deg)'; } },
        { id: 'wobblyPage', name: '🥴 Wobbly Page', action: () => css('wbP', '@keyframes wbp { 0%,100%{transform:skewX(0deg);} 25%{transform:skewX(5deg);} 75%{transform:skewX(-5deg);} } body { animation: wbp 2s infinite ease-in-out; }') },
        { id: 'earthquake', name: '📳 Earthquake', action: () => css('eq', '@keyframes eq { 0%{transform:translate(2px,1px);} 25%{transform:translate(-2px,-2px);} 50%{transform:translate(2px,-1px);} 75%{transform:translate(-1px,2px);} 100%{transform:translate(1px,-2px);} } body { animation: eq 0.2s infinite; }') },
        { id: 'spinImages', name: '🌀 Spinning Images', action: () => css('spi', '@keyframes spn { 100%{transform:rotate(360deg);} } img { animation: spn 3s linear infinite; }') },
        { id: 'fleeing', name: '🏃 Fleeing Buttons', action: () => q('button, a').forEach(el => el.addEventListener('mouseover', () => { el.style.position='relative'; el.style.transition='all 0.2s'; el.style.top=(Math.random()*100-50)+'px'; el.style.left=(Math.random()*100-50)+'px'; })) },
        { id: 'dvdBouncer', name: '📀 DVD Bouncer', action: () => { const d=document.createElement('div'); d.style.cssText='position:fixed;width:120px;height:60px;background:blue;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;z-index:999999;font-size:24px;border-radius:10px;'; d.textContent='DVD'; document.body.appendChild(d); let x=50,y=50,vx=4,vy=4; setInterval(()=>{ x+=vx; y+=vy; if(x<=0||x>=innerWidth-120)vx*=-1; if(y<=0||y>=innerHeight-60)vy*=-1; d.style.left=x+'px'; d.style.top=y+'px'; d.style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16); },16); } },
        { id: 'shrinkRay', name: '🤏 Shrink Page', action: () => { document.body.style.transition='transform 5s'; document.body.style.transform='scale(0.05)'; } },
        { id: 'flipImages', name: '🙃 Upside Down Images', action: () => css('fpi', 'img { transform: rotate(180deg) !important; }') },
        { id: 'marqueeBanner', name: '🚨 Hacked Marquee', action: () => { const m=document.createElement('marquee'); m.style.cssText='position:fixed;top:10vh;width:100vw;z-index:999999;color:red;font-size:60px;font-family:monospace;font-weight:bold;text-shadow:0 0 10px red;background:rgba(0,0,0,0.8);'; m.textContent='/// SYSTEM COMPROMISED BY FreshAssassin ///'; document.body.appendChild(m); } },
        { id: 'deepFry', name: '🍟 Deep Fryer', action: () => document.body.style.filter = 'contrast(500%) saturate(800%) sepia(30%)' },
        { id: 'invert', name: '🦇 Invert Colors', action: () => document.body.style.filter = 'invert(100%)' },
        { id: 'blur', name: '🌫️ Blur Page', action: () => document.body.style.filter = 'blur(5px)' },
        { id: 'ghost', name: '👻 Ghost Mode', action: () => document.body.style.opacity = '0.15' },
        { id: 'matrixTheme', name: '💻 Matrix Theme', action: () => { document.body.style.backgroundColor='black'; css('mtx', '* { color:#00ff00 !important; font-family:monospace !important; text-shadow:0 0 3px #00ff00; }'); } },
        { id: 'disco', name: '🕺 Disco Background', action: () => setInterval(() => document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16), 300) },
        { id: 'theFloorIsLava', name: '🌋 Floor is Lava', action: () => { document.body.style.background = '#ff2200'; q('p, img, div, h1').forEach(el => { el.style.transition = 'transform 10s ease-in'; el.style.transform = 'translateY(100vh)'; }); } },
        { id: 'blackout', name: '⬛ 95% Blackout', action: () => { const d=document.createElement('div'); d.style.cssText='position:fixed;top:0;left:0;width:100vw;height:100vh;background:black;z-index:999998;opacity:0.95;pointer-events:none;'; document.body.appendChild(d); } },
        { id: 'rainbowText', name: '🌈 Rainbow Text', action: () => css('rbw', '@keyframes rbw { 0%{color:red;} 33%{color:lime;} 66%{color:blue;} 100%{color:red;} } * { animation: rbw 1s infinite; }') },
        { id: 'rainbowBg', name: '🌈 Rainbow Background', action: () => css('rbg', '@keyframes rbg { 0%{background:red;} 33%{background:lime;} 66%{background:blue;} 100%{background:red;} } body { animation: rbg 3s infinite; }') },
        { id: 'comicSans', name: '🤡 Comic Sans', action: () => css('cs', '* { font-family: "Comic Sans MS", "Chalkboard SE", sans-serif !important; }') },
        { id: 'capitalist', name: '💰 CAPITALIST MODE', action: () => css('cap', '* { text-transform: uppercase !important; font-weight: 900 !important; }') },
        { id: 'redacted', name: '⬛ Redacted Text', action: () => css('rd', 'p,h1,h2,span,a,li { background-color:black !important; color:black !important; }') },
        { id: 'invisibleInk', name: '🕵️ Invisible Ink', action: () => css('ink', 'p,h1,h2,span,a { opacity:0; transition:opacity 0.2s; } p:hover,h1:hover,h2:hover,span:hover,a:hover { opacity:1; }') },
        { id: 'hideVowels', name: '🚫 Steal Vowels', action: () => walk(txt => txt.replace(/[aeiouAEIOU]/g, '')) },
        { id: 'banana', name: '🍌 = Banana', action: () => walk(txt => txt.replace(/\bthe\b/gi, 'banana')) },
        { id: 'hugeFonts', name: '🐘 Massive Fonts', action: () => css('hgf', '* { font-size: 50px !important; line-height: 1.2 !important; }') },
        { id: 'microFonts', name: '🐜 Microscopic Fonts', action: () => css('mcf', '* { font-size: 4px !important; }') },
        { id: 'textShadowChaos', name: '👥 Text Shadow Chaos', action: () => css('tsch', '* { text-shadow: 5px 5px 0px red, -5px -5px 0px blue !important; }') },
        { id: 'spacingOut', name: '🌌 Wide Spacing', action: () => css('wls', '* { letter-spacing: 15px !important; }') },
        { id: 'cursorPizza', name: '🍕 Pizza Cursor', action: () => css('csr', '* { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\'><text y=\'30\' font-size=\'30\'>🍕</text></svg>"), auto !important; }') },
        { id: 'crosshair', name: '🎯 Sniper Crosshair', action: () => css('ch', '* { cursor: crosshair !important; }') },
        { id: 'hideCursor', name: '🙈 Invisible Cursor', action: () => css('hc', '* { cursor: none !important; }') },
        { id: 'elementDeleter', name: '❌ Delete Elements', action: () => document.body.addEventListener('click', e => { e.preventDefault(); e.target.remove(); }) },
        { id: 'bouncyClicks', name: '🏀 Bouncy Clicks', action: () => document.body.addEventListener('click', () => { document.body.style.transition='transform 0.1s'; document.body.style.transform='translateY(-30px)'; setTimeout(()=>document.body.style.transform='', 100); }) },
        { id: 'clickExplode', name: '💣 Click to Explode', action: () => document.body.addEventListener('click', e => { e.preventDefault(); e.target.style.transition='all 1s'; e.target.style.transform=`translate(${Math.random()*500-250}px, -1000px) rotate(360deg)`; e.target.style.opacity=0; }) },
        { id: 'disableInputs', name: '🛑 Disable Typing', action: () => q('input, textarea, button').forEach(el => el.disabled = true) },
        { id: 'highlightLock', name: '🟩 Green Highlight', action: () => css('hl', '*::selection { background: lime !important; color: black !important; }') },
        { id: 'stretchyHover', name: '📏 Stretchy Hover', action: () => css('sth', 'img:hover { transform:scaleY(3); transition:transform 0.3s; z-index:9999; position:relative; }') },
        { id: 'phantomClicks', name: '👻 Phantom Clicks', action: () => setInterval(() => { const d=document.createElement('div'); d.style.cssText=`position:fixed;width:20px;height:20px;border:2px solid red;border-radius:50%;left:${Math.random()*100}vw;top:${Math.random()*100}vh;pointer-events:none;transition:all 0.5s;z-index:9999;`; document.body.appendChild(d); setTimeout(()=>{d.style.transform='scale(3)';d.style.opacity=0;},10); setTimeout(()=>d.remove(),500); }, 300) },
        { id: 'cageMode', name: '🖼️ Nic Cage Mode', action: () => q('img').forEach(img => { img.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Nicolas_Cage_Deauville_2013.jpg'; img.srcset = ''; img.style.objectFit = 'cover'; }) },
        { id: 'roundImages', name: '🟡 Circular Images', action: () => q('img').forEach(i => i.style.borderRadius = '50%') },
        { id: 'hyperSpeed', name: '⏩ Hyper Videos', action: () => q('video').forEach(v => v.playbackRate = 10) },
        { id: 'slowMo', name: '🐌 Slow-Mo Videos', action: () => q('video').forEach(v => v.playbackRate = 0.1) },
        { id: 'watermark', name: '📼 Hypercam Watermark', action: () => { const d=document.createElement('div'); d.textContent='UNREGISTERED HYPERCAM 2'; d.style.cssText='position:fixed;top:10px;left:10px;font-size:30px;color:white;text-shadow:2px 2px 0 red;z-index:999999;pointer-events:none;font-family:sans-serif;font-weight:bold;'; document.body.appendChild(d); } },
        { id: 'snowfall', name: '❄️ Matrix Snowfall', action: () => { css('snw', '@keyframes fl { 0%{transform:translateY(-10vh);} 100%{transform:translateY(110vh);} } .sn { position:fixed; color:#0f0; font-size:20px; z-index:99999; animation:fl 3s linear infinite; pointer-events:none; }'); for(let i=0;i<50;i++){ let s=document.createElement('div'); s.className='sn'; s.textContent=String.fromCharCode(33+Math.random()*90); s.style.left=Math.random()*100+'vw'; s.style.animationDuration=(Math.random()*2+2)+'s'; document.body.appendChild(s); } } },
        { id: 'infiniteScroll', name: '♾️ Scroll Trap', action: () => setInterval(() => window.scrollTo(0, 0), 100) },
        { id: 'swapImages', name: '🔀 Swap All Images', action: () => { const imgs = Array.from(document.images); const srcs = imgs.map(i => i.src); imgs.forEach((img, i) => img.src = srcs[(i+1) % srcs.length]); } },
        { id: 'upsideDown', name: '🙃 Upside Down Page', action: () => document.body.style.transform = 'rotate(180deg)' },
        { id: 'mirror', name: '🪞 Mirror Dimension', action: () => document.body.style.transform = 'scaleX(-1)' },

        // 🚀 THE 100 NEW BRAND NEW POWERS (NO JUNK)
        
        // --- 15 NEW CURSORS ---
        { id: 'c_wand', name: '🪄 Magic Wand Cursor', action: () => css('cw', '* { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\'><text y=\'30\' font-size=\'30\'>🪄</text></svg>"), auto !important; }') },
        { id: 'c_toxic', name: '☣️ Toxic Cursor', action: () => css('ctx', '* { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\'><text y=\'30\' font-size=\'30\'>☣️</text></svg>"), auto !important; }') },
        { id: 'c_finger', name: '🖕 Middle Finger Cursor', action: () => css('cmf', '* { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\'><text y=\'30\' font-size=\'30\'>🖕</text></svg>"), auto !important; }') },
        { id: 'c_skull', name: '💀 Skull Cursor', action: () => css('csk', '* { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\'><text y=\'30\' font-size=\'30\'>💀</text></svg>"), auto !important; }') },
        { id: 'c_alien', name: '👽 Alien Cursor', action: () => css('cal', '* { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\'><text y=\'30\' font-size=\'30\'>👽</text></svg>"), auto !important; }') },
        { id: 'c_poop', name: '💩 Poop Cursor', action: () => css('cpo', '* { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\'><text y=\'30\' font-size=\'30\'>💩</text></svg>"), auto !important; }') },
        { id: 'c_clown', name: '🤡 Clown Cursor', action: () => css('ccl', '* { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\'><text y=\'30\' font-size=\'30\'>🤡</text></svg>"), auto !important; }') },
        { id: 'c_ghost', name: '👻 Ghost Cursor', action: () => css('cgh', '* { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\'><text y=\'30\' font-size=\'30\'>👻</text></svg>"), auto !important; }') },
        { id: 'c_knife', name: '🔪 Knife Cursor', action: () => css('ckn', '* { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\'><text y=\'30\' font-size=\'30\'>🔪</text></svg>"), auto !important; }') },
        { id: 'c_bomb', name: '💣 Bomb Cursor', action: () => css('cbo', '* { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\'><text y=\'30\' font-size=\'30\'>💣</text></svg>"), auto !important; }') },
        { id: 'c_eye', name: '👁️ Creepy Eye Cursor', action: () => css('cey', '* { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\'><text y=\'30\' font-size=\'30\'>👁️</text></svg>"), auto !important; }') },
        { id: 'c_spider', name: '🕷️ Spider Cursor', action: () => css('csp', '* { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\'><text y=\'30\' font-size=\'30\'>🕷️</text></svg>"), auto !important; }') },
        { id: 'c_blood', name: '🩸 Blood Drop Cursor', action: () => css('cbl', '* { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\'><text y=\'30\' font-size=\'30\'>🩸</text></svg>"), auto !important; }') },
        { id: 'c_bat', name: '🦇 Bat Cursor', action: () => css('cbt', '* { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\'><text y=\'30\' font-size=\'30\'>🦇</text></svg>"), auto !important; }') },
        { id: 'c_pirate', name: '🏴‍☠️ Pirate Flag Cursor', action: () => css('cpi', '* { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\'><text y=\'30\' font-size=\'30\'>🏴‍☠️</text></svg>"), auto !important; }') },

        // --- 15 NEW TEXT TROLLS ---
        { id: 't_spongebob', name: '🧽 mOcKiNg TeXt', action: () => walk(t => t.split('').map((c,i) => i%2===0 ? c.toLowerCase() : c.toUpperCase()).join('')) },
        { id: 't_owo', name: '😽 OwO-IFY TEXT', action: () => walk(t => t.replace(/[rl]/g, 'w').replace(/[RL]/g, 'W') + ' uwu') },
        { id: 't_scramble', name: '🔀 Scramble Words', action: () => walk(t => t.split(' ').sort(()=>Math.random()-0.5).join(' ')) },
        { id: 't_reverse', name: '⏪ Reverse All Text', action: () => walk(t => t.split('').reverse().join('')) },
        { id: 't_yoda', name: '🐸 Yoda Speak', action: () => walk(t => t.split(' ').reverse().join(' ')) },
        { id: 't_zalgo', name: '👹 Zalgo Fake Text', action: () => css('tz', 'p,h1,h2,a,span { text-shadow: 0 5px 0 red, 0 -5px 0 black, 5px 0 0 darkred; }') },
        { id: 't_bold', name: '💪 Ultra Bold Everything', action: () => css('tb', '* { font-weight: 900 !important; }') },
        { id: 't_italic', name: '🤌 Italic Everything', action: () => css('ti', '* { font-style: italic !important; }') },
        { id: 't_strike', name: '🔪 Strike-through All', action: () => css('ts', '* { text-decoration: line-through !important; }') },
        { id: 't_links', name: '🔗 Rickroll All Links', action: () => q('a').forEach(a => a.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ') },
        { id: 't_noNum', name: '🔢 Remove All Numbers', action: () => walk(t => t.replace(/[0-9]/g, '')) },
        { id: 't_under', name: '＿ Replace Spaces w/ Lines', action: () => walk(t => t.replace(/ /g, '_')) },
        { id: 't_emoji', name: '🍕 Add Emojis to Text', action: () => walk(t => t.replace(/\./g, ' 🍕.')) },
        { id: 't_fontRnd', name: '🎲 Random Font Sizes', action: () => q('p,span,a').forEach(e => e.style.fontSize = Math.floor(Math.random()*40+10)+'px') },
        { id: 't_fly', name: '🕊️ Hover Text Fly Away', action: () => css('tf', 'p:hover, h1:hover, span:hover { transform: translateY(-500px); transition: 1s; opacity:0; }') },

        // --- 20 NEW PAGE DISTORTIONS ---
        { id: 'v_crt', name: '📺 CRT Monitor Filter', action: () => css('vcrt', 'body::after { content:""; position:fixed; top:0; left:0; width:100vw; height:100vh; background:linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%); background-size:100% 4px; pointer-events:none; z-index:999999; }') },
        { id: 'v_sepia', name: '📜 Sepia Max', action: () => document.body.style.filter = 'sepia(100%)' },
        { id: 'v_gray', name: '🔲 Grayscale Max', action: () => document.body.style.filter = 'grayscale(100%)' },
        { id: 'v_contrast', name: '🌞 Ultra Contrast', action: () => document.body.style.filter = 'contrast(300%)' },
        { id: 'v_hueCycle', name: '🌈 Hue Cycle Infinite', action: () => css('vhc', '@keyframes hc { 100%{filter:hue-rotate(360deg);} } body { animation: hc 5s linear infinite; }') },
        { id: 'v_strobe', name: '💡 Opacity Strobe', action: () => css('vst', '@keyframes st { 0%,100%{opacity:1;} 50%{opacity:0.5;} } body { animation: st 0.1s infinite; }') },
        { id: 'v_3d', name: '📐 3D Perspective Tilt', action: () => document.body.style.cssText += '; transform: perspective(500px) rotateX(10deg);' },
        { id: 'v_glow', name: '🌟 Glowing Links', action: () => css('vgl', 'a { text-shadow: 0 0 10px lime, 0 0 20px lime !important; color: white !important; }') },
        { id: 'v_outline', name: '🔤 Text Outline Only', action: () => css('vot', '* { -webkit-text-stroke: 1px red; color: transparent !important; }') },
        { id: 'v_rbBorder', name: '🌈 Rainbow Borders', action: () => css('vrb', '@keyframes rb { 100%{filter:hue-rotate(360deg);} } * { border: 2px solid red !important; animation: rb 2s linear infinite; }') },
        { id: 'v_pulse', name: '💓 Pulse Page Size', action: () => css('vpu', '@keyframes pu { 0%,100%{transform:scale(1);} 50%{transform:scale(1.05);} } body { animation: pu 1s ease-in-out infinite; }') },
        { id: 'v_wide', name: '🎞️ Cinematic Widescreen', action: () => css('vwd', 'body::before, body::after { content:""; position:fixed; left:0; width:100vw; height:15vh; background:black; z-index:999999; pointer-events:none; } body::before{top:0;} body::after{bottom:0;}') },
        { id: 'v_melt', name: '🫠 Melting Site', action: () => css('vmlt', 'body * { filter: blur(1px); transform: skewY(5deg); transition: 10s; }') },
        { id: 'v_shakeHover', name: '🫨 Shake on Hover', action: () => css('vsh', 'img:hover, button:hover { transform: translate(2px, 2px); transition: 0.1s; }') },
        { id: 'v_blurHover', name: '🌫️ Blur on Hover', action: () => css('vbh', '*:hover { filter: blur(3px); transition: 0.2s; }') },
        { id: 'v_invHover', name: '🦇 Invert on Hover', action: () => css('vih', '*:hover { filter: invert(1); transition: 0.2s; }') },
        { id: 'v_hueHover', name: '🌈 Hue on Hover', action: () => css('vhh', '*:hover { filter: hue-rotate(90deg); transition: 0.2s; }') },
        { id: 'v_glitchTxt', name: '👾 Glitch Text Animation', action: () => css('vgt', '@keyframes gt { 0%{transform:translate(1px)} 50%{transform:translate(-1px)} } h1,h2,p { animation: gt 0.1s infinite; }') },
        { id: 'v_radius', name: '🔴 50% Border Radius All', action: () => css('vrd', '* { border-radius: 50% !important; }') },
        { id: 'v_boxShadow', name: '⬛ Box Shadow All', action: () => css('vbs', '* { box-shadow: 5px 5px 0px black !important; }') },

        // --- 20 NEW PHYSICS & MOVEMENT ---
        { id: 'p_gravUp', name: '🎈 Gravity UP', action: () => q('*').forEach(e => { e.style.transition='transform 3s'; e.style.transform='translateY(-2000px)'; }) },
        { id: 'p_gravLeft', name: '⬅️ Gravity LEFT', action: () => q('*').forEach(e => { e.style.transition='transform 3s'; e.style.transform='translateX(-2000px)'; }) },
        { id: 'p_gravRight', name: '➡️ Gravity RIGHT', action: () => q('*').forEach(e => { e.style.transition='transform 3s'; e.style.transform='translateX(2000px)'; }) },
        { id: 'p_bounceP', name: '⛹️ Bouncing Paragraphs', action: () => css('pbp', '@keyframes bp { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} } p { animation: bp 1s infinite; }') },
        { id: 'p_spinInp', name: '🌀 Spinning Inputs', action: () => css('psi', '@keyframes si { 100%{transform:rotate(360deg)} } input { animation: si 2s linear infinite; }') },
        { id: 'p_floatA', name: '🌊 Floating Links', action: () => css('pfa', '@keyframes fa { 50%{transform:translateY(-10px)} } a { display:inline-block; animation: fa 2s infinite ease-in-out; }') },
        { id: 'p_shrinkImg', name: '🤏 Shrinking Images Hover', action: () => css('pshi', 'img:hover { transform: scale(0.1); transition: 1s; }') },
        { id: 'p_growBtn', name: '🐘 Expanding Buttons', action: () => css('pgb', 'button:hover { transform: scale(3); transition: 0.5s; z-index:99; position:relative; }') },
        { id: 'p_tremor', name: '📳 Screen Tremor Loop', action: () => setInterval(()=>document.body.style.transform=`translate(${Math.random()*10-5}px, ${Math.random()*10-5}px)`, 50) },
        { id: 'p_slideInf', name: '⛸️ Slide Left Infinite', action: () => css('psl', '@keyframes sl { 100%{transform:translateX(-100vw)} } body { animation: sl 10s linear infinite; }') },
        { id: 'p_zoomIn', name: '🔍 Zoom In Infinite', action: () => css('pzi', 'body { transition: transform 60s; transform: scale(10); }') },
        { id: 'p_zoomOut', name: '🔎 Zoom Out Infinite', action: () => css('pzo', 'body { transition: transform 60s; transform: scale(0.01); }') },
        { id: 'p_swing', name: '🐒 Swinging Page', action: () => css('psw', '@keyframes sw { 50%{transform:rotate(5deg)} } body { transform-origin: top center; animation: sw 3s infinite ease-in-out; }') },
        { id: 'p_drift', name: '🌬️ Drifting Elements', action: () => css('pdr', '* { transition: margin 10s; margin-left: 500px !important; }') },
        { id: 'p_repel', name: '🧲 Repelling Buttons', action: () => q('button').forEach(b => b.addEventListener('mousemove', e => { b.style.transform=`translate(${e.movementX*-5}px, ${e.movementY*-5}px)` })) },
        { id: 'p_magnet', name: '🧲 Magnetic Inputs', action: () => q('input').forEach(b => b.addEventListener('mousemove', e => { b.style.transform=`translate(${e.movementX*2}px, ${e.movementY*2}px)` })) },
        { id: 'p_fallTxt', name: '🍂 Falling Text', action: () => css('pft', 'h1,p { position:relative; transition: top 5s; top: 1000px; }') },
        { id: 'p_runScroll', name: '🏃 Runaway Scrollbar', action: () => window.addEventListener('mousemove', () => window.scrollBy(0, 10)) },
        { id: 'p_dvdPage', name: '📀 ENTIRE PAGE DVD BOUNCE', action: () => { document.body.style.position='fixed'; document.body.style.width='100vw'; document.body.style.height='100vh'; let x=0,y=0,vx=3,vy=3; setInterval(()=>{x+=vx;y+=vy;if(x<=0||x>=50)vx*=-1;if(y<=0||y>=50)vy*=-1;document.body.style.transform=`translate(${x}px, ${y}px)`;},16); } },
        { id: 'p_teleport', name: '✨ Teleport on Click', action: () => document.body.addEventListener('click', e => { if(!e.target.closest('#nebula-master-panel')){ e.target.style.position='fixed'; e.target.style.top=Math.random()*90+'vh'; e.target.style.left=Math.random()*90+'vw'; } }) },

        // --- 15 NEW FAKES & TROLLS ---
        { id: 'f_badge', name: '🔴 Fake Unread Badge (Title)', action: () => document.title = '(9+) ' + document.title },
        { id: 'f_typing', name: '💬 Fake Typing Indicator', action: () => { const d=document.createElement('div'); d.style.cssText='position:fixed;bottom:20px;left:20px;background:#333;color:white;padding:10px 20px;border-radius:20px;z-index:99999;'; d.textContent='FreshAssassin is typing...'; document.body.appendChild(d); } },
        { id: 'f_paywall', name: '💸 Fake Paywall', action: () => { const d=document.createElement('div'); d.style.cssText='position:fixed;bottom:0;left:0;width:100vw;height:50vh;background:rgba(255,255,255,0.95);backdrop-filter:blur(5px);z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;border-top:2px solid #ccc;'; d.innerHTML='<h1 style="color:black">You have reached your free article limit.</h1><button style="padding:15px;background:blue;color:white;font-size:20px;">Subscribe for $99/mo</button>'; document.body.appendChild(d); } },
        { id: 'f_conn', name: '🔌 Fake Connection Lost', action: () => { document.body.innerHTML = '<h1 style="text-align:center;margin-top:20vh;font-family:sans-serif;color:black;">No Internet Connection</h1><p style="text-align:center">Checking the proxy and the firewall...</p>'; document.body.style.background='white'; } },
        { id: 'f_trail', name: '🖱️ Mouse Trail Dots', action: () => document.addEventListener('mousemove', e => { const d=document.createElement('div'); d.style.cssText=`position:fixed;width:5px;height:5px;background:red;border-radius:50%;left:${e.clientX}px;top:${e.clientY}px;pointer-events:none;z-index:9999;`; document.body.appendChild(d); setTimeout(()=>d.remove(), 500); }) },
        { id: 'f_flashRed', name: '🚨 Flash Screen Red on Click', action: () => document.addEventListener('click', () => { const o=document.body.style.background; document.body.style.background='red'; setTimeout(()=>document.body.style.background=o, 50); }) },
        { id: 'f_noRight', name: '🚫 Disable Right Click', action: () => document.oncontextmenu = () => { alert('FreshAssassin says NO.'); return false; } },
        { id: 'f_noCopy', name: '🚫 Disable Copy', action: () => document.oncopy = () => { alert('Nice try.'); return false; } },
        { id: 'f_cookie', name: '🍪 Fake Cookie Banner', action: () => { const d=document.createElement('div'); d.style.cssText='position:fixed;bottom:0;width:100vw;background:#222;color:white;padding:20px;z-index:99999;display:flex;justify-content:space-between;align-items:center;'; d.innerHTML='<span>We use cookies to track your every move.</span><button onmouseover="this.style.transform=\'translateX(-100px)\'">Accept All</button>'; document.body.appendChild(d); } },
        { id: 'f_batt', name: '🔋 Fake Low Battery', action: () => { const d=document.createElement('div'); d.style.cssText='position:fixed;top:20px;right:20px;background:white;color:black;border:2px solid red;padding:15px;z-index:99999;font-family:sans-serif;font-weight:bold;box-shadow:0 0 10px red;'; d.textContent='Battery at 1%. Plug in now.'; document.body.appendChild(d); } },
        { id: 'f_adblock', name: '🛑 Fake Adblock Warning', action: () => { const d=document.createElement('div'); d.style.cssText='position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.9);z-index:999999;display:flex;align-items:center;justify-content:center;color:white;font-family:sans-serif;'; d.innerHTML='<h1>Please Disable Your Ad Blocker to Continue</h1>'; document.body.appendChild(d); } },
        { id: 'f_alert', name: '⚠️ Alert Loop (Warning)', action: () => { for(let i=0;i<5;i++) setTimeout(()=>alert("System compromised by FreshAssassin."), i*1000); } },
        { id: 'f_prompt', name: '❓ Prompt Loop', action: () => { for(let i=0;i<3;i++) setTimeout(()=>prompt("What is your password?"), i*1500); } },
        { id: 'f_spotlight', name: '🔦 Tiny Spotlight Mode', action: () => { css('fsp', 'body::after{content:"";position:fixed;top:0;left:0;width:100vw;height:100vh;background:radial-gradient(circle 50px at var(--x, 50vw) var(--y, 50vh), transparent, black 100%);pointer-events:none;z-index:99999;}'); document.addEventListener('mousemove', e => { document.body.style.setProperty('--x', e.clientX+'px'); document.body.style.setProperty('--y', e.clientY+'px'); }); } },
        { id: 'f_sub', name: '🔔 Fake Subscribe Popup', action: () => { const d=document.createElement('div'); d.style.cssText='position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;color:black;padding:40px;box-shadow:0 0 50px black;z-index:99999;text-align:center;border-radius:10px;'; d.innerHTML='<h2>Subscribe to our Newsletter!</h2><p>You cannot close this.</p>'; document.body.appendChild(d); } },

        // --- 15 NEW CHAOS & MISC ---
        { id: 'm_rndBg', name: '🎨 Random Bg per Element', action: () => q('*').forEach(e => e.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16)) },
        { id: 'm_swapTxt', name: '🔀 Swap Texts', action: () => { const p = Array.from(q('p')); const t = p.map(x=>x.textContent); p.forEach((x,i)=>x.textContent=t[(i+1)%t.length]); } },
        { id: 'm_hideRnd', name: '🫣 Hide Random Every Sec', action: () => setInterval(() => { const a=q('*'); a[Math.floor(Math.random()*a.length)].style.visibility='hidden'; }, 1000) },
        { id: 'm_dupRnd', name: '👯 Duplicate Random Sec', action: () => setInterval(() => { const a=q('img, p, button'); const e=a[Math.floor(Math.random()*a.length)]; if(e) e.parentElement.appendChild(e.cloneNode(true)); }, 1000) },
        { id: 'm_scrollBot', name: '⬇️ Scroll Bottom Instantly', action: () => window.scrollTo(0, document.body.scrollHeight) },
        { id: 'm_scrollRnd', name: '🔀 Scroll Random Sec', action: () => setInterval(() => window.scrollTo(Math.random()*500, Math.random()*5000), 1000) },
        { id: 'm_rot1deg', name: '📐 Rotate 1deg / Sec', action: () => { let d=0; setInterval(()=>{d+=1; document.body.style.transform=`rotate(${d}deg)`;}, 1000); } },
        { id: 'm_zindex', name: '🥞 Random Z-Index', action: () => q('*').forEach(e => e.style.zIndex = Math.floor(Math.random()*1000)) },
        { id: 'm_marqueeAll', name: '🚨 Marquee EVERYTHING', action: () => q('p, h1, h2, img').forEach(e => { const m = document.createElement('marquee'); e.parentNode.insertBefore(m, e); m.appendChild(e); }) },
        { id: 'm_blinkAll', name: '👁️‍🗨️ Blink Everything', action: () => css('mba', '@keyframes bk { 50%{opacity:0} } * { animation: bk 1s infinite; }') },
        { id: 'm_1x1', name: '🫥 1x1 Transparent Images', action: () => q('img').forEach(i => i.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7') },
        { id: 'm_audioSil', name: '🔇 Play Silent Audio', action: () => new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA').play() },
        { id: 'm_hyperScroll', name: '⏩ HYPER SCROLL', action: () => window.addEventListener('wheel', e => { e.preventDefault(); window.scrollBy(0, e.deltaY * 10); }, {passive: false}) },
        { id: 'm_roulette', name: '🎰 LINK ROULETTE', action: () => { const l = Array.from(q('a')); const h = l.map(x=>x.href); l.forEach(x => x.href = h[Math.floor(Math.random()*h.length)]); } },
        { id: 'm_noEscape', name: '🚪 No Escape (Exit Alert)', action: () => document.addEventListener('mouseleave', () => alert("Where are you going?")) }
    ];

    // --- 3. THE v8.0 FIRE UI BUILDER (GRID SHOWS ALL 160) ---
    const overlay = document.createElement('div');
    overlay.id = 'nebula-master-panel';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(5,0,5,0.95);color:#ff0055;font-family:"Courier New", monospace;z-index:2147483647;padding:20px;box-sizing:border-box;display:flex;justify-content:center;align-items:center;backdrop-filter:blur(15px);';

    css('fire-anim', `
        @keyframes fireGlow { 0% { box-shadow: 0 0 20px #ff0055, inset 0 0 10px #ff0055; } 50% { box-shadow: 0 0 60px #ff0055, inset 0 0 30px #ff00aa; border-color: #ff00aa; } 100% { box-shadow: 0 0 20px #ff0055, inset 0 0 10px #ff0055; } }
        @keyframes textGlitch { 0% { text-shadow: 2px 0 0 red, -2px 0 0 cyan; } 50% { text-shadow: -2px 0 0 red, 2px 0 0 cyan; } 100% { text-shadow: 2px 0 0 red, -2px 0 0 cyan; } }
        #nebula-master-panel div::-webkit-scrollbar{width:12px} #nebula-master-panel div::-webkit-scrollbar-thumb{background:#ff0055;border-radius:6px;border:3px solid #0a0005;} #nebula-master-panel div::-webkit-scrollbar-track{background:#110005;}
    `);

    const container = document.createElement('div');
    container.style.cssText = 'width:98%; max-width:1600px; height: 95vh; border:2px solid #ff0055; padding:25px; background:#0a0005; border-radius:15px; display:flex; flex-direction:column; animation: fireGlow 3s infinite alternate;';
    overlay.appendChild(container);

    const header = document.createElement('div');
    header.style.textAlign = 'center';
    header.innerHTML = '<h1 style="margin:0; font-size: 3em; letter-spacing: 5px; animation: textGlitch 0.2s infinite; color: white;">/// PROJECT NEBULA v8.0 ///</h1><h3 style="color:#ff00aa; margin-top:5px; text-shadow: 0 0 10px #ff00aa;">THE 160-POWER FIRE ARSENAL | FRESHASSASSIN</h3>';
    container.appendChild(header);

    const controlZone = document.createElement('div');
    controlZone.style.cssText = 'display:flex; gap:15px; margin: 20px 0;';
    
    const txtIn = document.createElement('input'); txtIn.id = 'nebula-custom-text'; txtIn.placeholder = 'Custom Text Override...'; txtIn.style.cssText = 'flex:1; padding:12px; background:#1a000a; border:1px solid #ff0055; color:#ff00aa; font-family:monospace; font-weight:bold; outline:none;';
    const imgIn = document.createElement('input'); imgIn.id = 'nebula-custom-img'; imgIn.placeholder = 'Custom Image URL Override...'; imgIn.style.cssText = 'flex:1; padding:12px; background:#1a000a; border:1px solid #ff0055; color:#ff00aa; font-family:monospace; font-weight:bold; outline:none;';
    const searchIn = document.createElement('input'); searchIn.placeholder = '🔍 Search 160 Powers...'; searchIn.style.cssText = 'flex:1; padding:12px; background:#ff0055; border:1px solid #ff00aa; color:#000; font-family:monospace; font-weight:bold; outline:none;';
    
    controlZone.appendChild(txtIn); controlZone.appendChild(imgIn); controlZone.appendChild(searchIn);
    container.appendChild(controlZone);

    const grid = document.createElement('div');
    grid.style.cssText = 'flex: 1; overflow-y:auto; display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:12px; padding: 15px; background: rgba(0,0,0,0.6); border: 1px solid #330011; border-radius: 8px; align-content: start;';
    container.appendChild(grid);

    const checkboxes = {};
    const labels = [];

    payloads.forEach(p => {
        const l = document.createElement('label');
        l.style.cssText = 'background:#110005; padding:12px; border:1px solid #440011; cursor:pointer; display:flex; align-items:center; gap:10px; font-size:0.9em; color:#ddd; border-radius:6px; transition:0.3s; box-shadow: 0 4px 6px rgba(0,0,0,0.5);';
        l.onmouseover = () => { l.style.borderColor = '#ff00aa'; l.style.boxShadow = '0 0 15px rgba(255,0,85,0.4)'; l.style.transform = 'translateY(-2px)'; };
        l.onmouseout = () => { l.style.borderColor = '#440011'; l.style.boxShadow = '0 4px 6px rgba(0,0,0,0.5)'; l.style.transform = 'none'; };
        
        const i = document.createElement('input'); i.type = 'checkbox'; i.style.accentColor = '#ff00aa'; i.style.transform = 'scale(1.3)';
        const s = document.createElement('span'); s.textContent = p.name;
        if(['kusarigama', 'madron', 'struycken', 'customText', 'customImg', 'purge'].includes(p.id)) { s.style.color = '#ff0055'; s.style.fontWeight = 'bold'; s.style.textShadow = '0 0 5px #ff0055'; }

        l.appendChild(i); l.appendChild(s);
        grid.appendChild(l);
        checkboxes[p.id] = { input: i, action: p.action, name: p.name.toLowerCase(), label: l };
        labels.push(checkboxes[p.id]);
    });

    searchIn.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        labels.forEach(item => {
            if(item.name.includes(term)) item.label.style.display = 'flex';
            else item.label.style.display = 'none';
        });
    });

    const btn = document.createElement('button');
    btn.textContent = '🔥 DEPLOY NEBULA PROTOCOL 🔥';
    btn.style.cssText = 'margin-top:20px; padding:20px; background:linear-gradient(45deg, #4a0011, #ff0055); border:none; color:white; font-size:1.6em; font-weight:bold; cursor:pointer; transition:0.3s; text-transform:uppercase; letter-spacing:4px; border-radius:8px; box-shadow: 0 0 20px #ff0055;';
    btn.onmouseover = () => { btn.style.transform = 'scale(1.02)'; btn.style.boxShadow = '0 0 40px #ff00aa'; };
    btn.onmouseout = () => { btn.style.transform = 'scale(1)'; btn.style.boxShadow = '0 0 20px #ff0055'; };
    container.appendChild(btn);

    document.body.appendChild(overlay);

    btn.onclick = () => {
        const sel = [];
        payloads.forEach(p => { if(checkboxes[p.id].input.checked) sel.push(checkboxes[p.id].action); });
        if(!sel.length) return alert("FreshAssassin: Select at least one payload to ignite the web.");
        overlay.remove();
        sel.forEach(a => { try{ a(); } catch(e){ console.error("Execution Blocked:", e); } });
    };
})();
