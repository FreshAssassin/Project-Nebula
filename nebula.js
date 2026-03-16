(function() {
    if (document.getElementById('nebula-master-panel')) return;

    // Helper to safely inject CSS animations and styles
    const injectCSS = (id, css) => {
        if(document.getElementById(id)) return;
        const style = document.createElement('style');
        style.id = id;
        style.textContent = css;
        document.head.appendChild(style);
    };

    // 1. Setup the Sleek UI Overlay
    const overlay = document.createElement('div');
    overlay.id = 'nebula-master-panel';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(5,5,15,0.95);color:#00ffcc;font-family:"Courier New", monospace;z-index:2147483647;padding:20px;box-sizing:border-box;overflow:auto;backdrop-filter:blur(10px); display:flex; justify-content:center; align-items:flex-start;';

    const container = document.createElement('div');
    container.style.cssText = 'width:100%; max-width:1000px; border:2px solid #00ffcc; padding:30px; box-shadow:0 0 40px rgba(0, 255, 204, 0.4), inset 0 0 20px rgba(0, 255, 204, 0.1); background:#050505; border-radius:8px; margin-top: 20px;';
    overlay.appendChild(container);

    const titleBox = document.createElement('div');
    titleBox.style.cssText = 'text-align:center; border-bottom: 1px dashed #00ffcc; padding-bottom: 20px; margin-bottom: 20px;';
    
    const title = document.createElement('h1');
    title.textContent = '/// PROJECT NEBULA ///';
    title.style.cssText = 'letter-spacing:4px; text-shadow:0 0 15px #00ffcc; margin: 0; font-size: 2.5em;';
    titleBox.appendChild(title);

    const subtitle = document.createElement('h3');
    subtitle.textContent = 'MASTERMIND: FreshAssassin';
    subtitle.style.cssText = 'color: #ff0055; text-shadow: 0 0 10px #ff0055; letter-spacing: 2px; margin-top: 10px; font-weight: bold;';
    titleBox.appendChild(subtitle);
    container.appendChild(titleBox);

    // 2. Custom Injection Zone
    const customZone = document.createElement('div');
    customZone.style.cssText = 'background: rgba(0, 255, 204, 0.05); border: 1px solid #00ffcc; padding: 15px; margin-bottom: 20px; border-radius: 5px;';
    
    const customTitle = document.createElement('h4');
    customTitle.textContent = '[ GLOBAL INJECTION OVERRIDES ]';
    customTitle.style.cssText = 'margin-top: 0; color: #fff;';
    customZone.appendChild(customTitle);

    const textLabel = document.createElement('label');
    textLabel.textContent = 'Custom Text Target: ';
    textLabel.style.display = 'block';
    const textInput = document.createElement('input');
    textInput.id = 'nebula-custom-text';
    textInput.type = 'text';
    textInput.placeholder = 'FreshAssassin owns this page...';
    textInput.style.cssText = 'width: 100%; padding: 8px; margin-top: 5px; margin-bottom: 15px; background: #111; border: 1px solid #00ffcc; color: lime; font-family: monospace; box-sizing: border-box;';
    textLabel.appendChild(textInput);
    customZone.appendChild(textLabel);

    const imgLabel = document.createElement('label');
    imgLabel.textContent = 'Custom Image Target (URL): ';
    imgLabel.style.display = 'block';
    const imgInput = document.createElement('input');
    imgInput.id = 'nebula-custom-img';
    imgInput.type = 'text';
    imgInput.placeholder = 'Paste image URL here...';
    imgInput.style.cssText = 'width: 100%; padding: 8px; margin-top: 5px; background: #111; border: 1px solid #00ffcc; color: lime; font-family: monospace; box-sizing: border-box;';
    imgLabel.appendChild(imgInput);
    customZone.appendChild(imgLabel);

    container.appendChild(customZone);

    // 3. The 60 Verified Payloads
    const payloads = [
        // MASTER INJECTIONS (Fixed and Optimized)
        { id: 'customText', name: '🔥 INJECT CUSTOM TEXT', action: () => { 
            const txt = document.getElementById('nebula-custom-text').value || 'FreshAssassin'; 
            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
            const nodes = [];
            let node;
            while (node = walker.nextNode()) {
                // Only target visible text, ignore scripts/styles/empty whitespace
                if (node.parentElement && ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(node.parentElement.tagName)) continue;
                if (node.nodeValue.trim() !== '') nodes.push(node);
            }
            nodes.forEach(n => n.nodeValue = txt); 
        }},
        { id: 'customImg', name: '🔥 INJECT CUSTOM IMAGE', action: () => { 
            const url = document.getElementById('nebula-custom-img').value || 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Nicolas_Cage_Deauville_2013.jpg'; 
            document.querySelectorAll('img').forEach(img => { img.src = url; img.srcset = ''; img.style.objectFit = 'cover'; }); 
        }},
        { id: 'purge', name: '🔥 VISUAL DOM PURGE', action: () => { document.body.replaceChildren(); document.body.style.backgroundColor = 'black'; const m = document.createElement('h1'); m.textContent = 'TARGET NEUTRALIZED BY FreshAssassin.'; m.style.cssText = 'color:#00ffcc;text-align:center;margin-top:40vh;font-family:monospace;font-size:3em;text-shadow:0 0 20px #00ffcc;'; document.body.appendChild(m); } },
        
        // FAKE OVERLAYS & ALERTS
        { id: 'tabHijack', name: 'Tab Renamer', action: () => setInterval(() => { document.title = document.title === 'HACKED BY FreshAssassin' ? 'YOUR PC IS MINE' : 'HACKED BY FreshAssassin'; }, 500) },
        { id: 'ransomware', name: 'Fake Ransomware Screen', action: () => { const d=document.createElement('div'); d.style.cssText='position:fixed;top:0;left:0;width:100vw;height:100vh;background:red;z-index:9999999;display:flex;flex-direction:column;align-items:center;justify-content:center;color:white;font-family:sans-serif;text-align:center;'; d.innerHTML='<h1 style="font-size:4em;margin:0;">SYSTEM LOCKED</h1><p style="font-size:2em;">Send 1,000,000 V-Bucks to FreshAssassin to unlock.</p>'; document.body.appendChild(d); } },
        { id: 'bsod', name: 'Fake Blue Screen (BSOD)', action: () => { const d=document.createElement('div'); d.style.cssText='position:fixed;top:0;left:0;width:100vw;height:100vh;background:#0000aa;z-index:9999999;color:white;font-family:monospace;padding:50px;font-size:24px;box-sizing:border-box;'; d.innerHTML='A fatal exception 0E has occurred at 028:C0011E36 in VXD VMM(01).<br><br>* Press CTRL+ALT+DEL to restart.<br>* You will lose any unsaved info.<br><br>Press any key to continue _'; document.body.appendChild(d); } },
        { id: 'virusPopups', name: 'Fake Virus Popups', action: () => setInterval(() => { const d=document.createElement('div'); d.style.cssText=`position:fixed;top:${Math.random()*90}vh;left:${Math.random()*90}vw;background:red;color:white;padding:15px;z-index:99999;border:3px solid yellow;font-weight:bold;font-family:sans-serif;box-shadow:5px 5px 0 black;`; d.textContent='⚠️ VIRUS DETECTED!'; document.body.appendChild(d); setTimeout(()=>d.remove(), 2500); }, 800) },
        { id: 'fakeLoading', name: 'Fake System Update', action: () => { const d=document.createElement('div'); d.style.cssText='position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-size:4vw;color:white;background:#0055ff;padding:40px;z-index:999999;font-family:sans-serif;box-shadow:0 0 100px black;text-align:center;'; d.textContent='SYSTEM UPDATING... DO NOT TURN OFF.'; document.body.appendChild(d); } },
        { id: 'flashbang', name: 'Flashbang', action: () => { const d=document.createElement('div'); d.style.cssText='position:fixed;top:0;left:0;width:100vw;height:100vh;background:white;z-index:9999999;transition:opacity 5s;'; document.body.appendChild(d); setTimeout(()=>d.style.opacity=0, 100); setTimeout(()=>d.remove(), 5100); } },
        { id: 'captcha', name: 'Evading Captcha', action: () => { const d=document.createElement('button'); d.style.cssText='position:fixed;top:50%;left:50%;padding:20px;font-size:20px;z-index:999999;background:white;border:2px solid #ccc;cursor:pointer;'; d.textContent='☑ I am not a robot'; d.onmouseover = () => { d.style.top=Math.random()*80+'vh'; d.style.left=Math.random()*80+'vw'; }; document.body.appendChild(d); } },
        
        // MOVEMENT & PHYSICS
        { id: 'gravity', name: 'CSS Gravity (Fall down)', action: () => document.querySelectorAll('p, img, div, h1, button').forEach(el => { el.style.transition = 'transform ' + (Math.random() * 3 + 1) + 's ease-in'; el.style.transform = `translateY(150vh) rotate(${Math.random() * 90 - 45}deg)`; }) },
        { id: 'barrelRoll', name: 'Barrel Roll (Spin page)', action: () => { document.body.style.transition = 'transform 4s ease-in-out'; document.body.style.transform = 'rotate(360deg)'; } },
        { id: 'wobblyPage', name: 'Wobbly Page', action: () => injectCSS('wbP', '@keyframes wbp { 0%,100%{transform:skewX(0deg);} 25%{transform:skewX(5deg);} 75%{transform:skewX(-5deg);} } body { animation: wbp 2s infinite ease-in-out; }') },
        { id: 'earthquake', name: 'Earthquake', action: () => injectCSS('eq', '@keyframes eq { 0%{transform:translate(2px,1px);} 25%{transform:translate(-2px,-2px);} 50%{transform:translate(2px,-1px);} 75%{transform:translate(-1px,2px);} 100%{transform:translate(1px,-2px);} } body { animation: eq 0.2s infinite; }') },
        { id: 'spinImages', name: 'Spinning Images', action: () => injectCSS('spi', '@keyframes spn { 100%{transform:rotate(360deg);} } img { animation: spn 3s linear infinite; }') },
        { id: 'fleeing', name: 'Fleeing Buttons', action: () => document.querySelectorAll('button, a').forEach(el => el.addEventListener('mouseover', () => { el.style.position = 'relative'; el.style.transition = 'all 0.2s'; el.style.top = (Math.random() * 100 - 50) + 'px'; el.style.left = (Math.random() * 100 - 50) + 'px'; })) },
        { id: 'dvdBouncer', name: 'DVD Bouncer', action: () => { const d=document.createElement('div'); d.style.cssText='position:fixed;width:120px;height:60px;background:blue;color:white;display:flex;align-items:center;justify-content:center;font-weight:bold;z-index:999999;font-size:24px;border-radius:10px;box-shadow:inset 0 0 10px rgba(0,0,0,0.5);'; d.textContent='DVD'; document.body.appendChild(d); let x=50,y=50,vx=4,vy=4; setInterval(()=>{ x+=vx; y+=vy; if(x<=0||x>=innerWidth-120)vx*=-1; if(y<=0||y>=innerHeight-60)vy*=-1; d.style.left=x+'px'; d.style.top=y+'px'; d.style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16); },16); } },
        { id: 'shrinkRay', name: 'Shrink Page', action: () => { document.body.style.transition='transform 5s'; document.body.style.transform='scale(0.05)'; } },
        { id: 'flipImages', name: 'Upside Down Images', action: () => injectCSS('fpi', 'img { transform: rotate(180deg) !important; }') },
        { id: 'marqueeBanner', name: 'Hacked Marquee Banner', action: () => { const m=document.createElement('marquee'); m.style.cssText='position:fixed;top:10vh;width:100vw;z-index:999999;color:red;font-size:60px;font-family:monospace;font-weight:bold;text-shadow:0 0 10px red;background:rgba(0,0,0,0.8);'; m.textContent='/// SYSTEM COMPROMISED BY FreshAssassin ///'; document.body.appendChild(m); } },

        // COLORS & FILTERS
        { id: 'deepFry', name: 'Deep Fryer', action: () => document.body.style.filter = 'contrast(500%) saturate(800%) sepia(30%)' },
        { id: 'invert', name: 'Invert Colors', action: () => document.body.style.filter = 'invert(100%)' },
        { id: 'blur', name: 'Blur Page', action: () => document.body.style.filter = 'blur(5px)' },
        { id: 'ghost', name: 'Ghost Mode', action: () => document.body.style.opacity = '0.15' },
        { id: 'matrixTheme', name: 'Matrix Theme', action: () => { document.body.style.backgroundColor='black'; injectCSS('mtx', '* { color:#00ff00 !important; font-family:monospace !important; text-shadow:0 0 3px #00ff00; }'); } },
        { id: 'disco', name: 'Disco Background', action: () => setInterval(() => document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16), 300) },
        { id: 'theFloorIsLava', name: 'The Floor is Lava', action: () => { document.body.style.background = '#ff2200'; document.querySelectorAll('p, img, div, h1').forEach(el => { el.style.transition = 'transform 10s ease-in'; el.style.transform = 'translateY(100vh)'; }); } },
        { id: 'blackout', name: '95% Blackout', action: () => { const d=document.createElement('div'); d.style.cssText='position:fixed;top:0;left:0;width:100vw;height:100vh;background:black;z-index:999998;opacity:0.95;pointer-events:none;'; document.body.appendChild(d); } },
        { id: 'rainbowText', name: 'Rainbow Text', action: () => injectCSS('rbw', '@keyframes rbw { 0%{color:red;} 33%{color:lime;} 66%{color:blue;} 100%{color:red;} } * { animation: rbw 1s infinite; }') },
        { id: 'rainbowBg', name: 'Rainbow Background', action: () => injectCSS('rbg', '@keyframes rbg { 0%{background:red;} 33%{background:lime;} 66%{background:blue;} 100%{background:red;} } body { animation: rbg 3s infinite; }') },

        // TEXT & FONTS
        { id: 'comicSans', name: 'Comic Sans Override', action: () => injectCSS('cs', '* { font-family: "Comic Sans MS", "Chalkboard SE", sans-serif !important; }') },
        { id: 'capitalist', name: 'CAPITALIST MODE', action: () => injectCSS('cap', '* { text-transform: uppercase !important; font-weight: 900 !important; }') },
        { id: 'redacted', name: 'Redacted Text', action: () => injectCSS('rd', 'p,h1,h2,span,a,li { background-color:black !important; color:black !important; }') },
        { id: 'invisibleInk', name: 'Invisible Ink (Hover)', action: () => injectCSS('ink', 'p,h1,h2,span,a { opacity:0; transition:opacity 0.2s; } p:hover,h1:hover,h2:hover,span:hover,a:hover { opacity:1; }') },
        { id: 'hideVowels', name: 'Steal All Vowels', action: () => { const w = document.createTreeWalker(document.body, 4, null, false); let n; while (n = w.nextNode()) { if(n.parentElement && ['SCRIPT','STYLE'].includes(n.parentElement.tagName)) continue; n.nodeValue = n.nodeValue.replace(/[aeiouAEIOU]/g, ''); } } },
        { id: 'banana', name: 'Autocorrect "The" to "Banana"', action: () => { const w = document.createTreeWalker(document.body, 4, null, false); let n; while (n = w.nextNode()) { if(n.parentElement && ['SCRIPT','STYLE'].includes(n.parentElement.tagName)) continue; n.nodeValue = n.nodeValue.replace(/\bthe\b/gi, 'banana'); } } },
        { id: 'hugeFonts', name: 'Massive Fonts', action: () => injectCSS('hgf', '* { font-size: 50px !important; line-height: 1.2 !important; }') },
        { id: 'microFonts', name: 'Microscopic Fonts', action: () => injectCSS('mcf', '* { font-size: 4px !important; }') },
        { id: 'textShadowChaos', name: 'Text Shadow Chaos', action: () => injectCSS('tsch', '* { text-shadow: 5px 5px 0px red, -5px -5px 0px blue !important; }') },
        { id: 'spacingOut', name: 'Wide Letter Spacing', action: () => injectCSS('wls', '* { letter-spacing: 15px !important; }') },

        // CURSOR & MOUSE
        { id: 'cursorPizza', name: 'Pizza Cursor', action: () => injectCSS('csr', '* { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\'><text y=\'30\' font-size=\'30\'>🍕</text></svg>"), auto !important; }') },
        { id: 'crosshair', name: 'Sniper Crosshair', action: () => injectCSS('ch', '* { cursor: crosshair !important; }') },
        { id: 'hideCursor', name: 'Invisible Cursor', action: () => injectCSS('hc', '* { cursor: none !important; }') },
        { id: 'elementDeleter', name: 'Click to Delete Elements', action: () => document.body.addEventListener('click', e => { e.preventDefault(); e.target.remove(); }) },
        { id: 'bouncyClicks', name: 'Bouncy Clicks', action: () => document.body.addEventListener('click', () => { document.body.style.transition='transform 0.1s'; document.body.style.transform='translateY(-30px)'; setTimeout(()=>document.body.style.transform='', 100); }) },
        { id: 'clickExplode', name: 'Click to Explode', action: () => document.body.addEventListener('click', e => { e.preventDefault(); e.target.style.transition='all 1s'; e.target.style.transform=`translate(${Math.random()*500-250}px, -1000px) rotate(360deg)`; e.target.style.opacity=0; }) },
        { id: 'disableInputs', name: 'Disable Typing/Clicking', action: () => document.querySelectorAll('input, textarea, button').forEach(el => el.disabled = true) },
        { id: 'highlightLock', name: 'Green Highlight Lock', action: () => injectCSS('hl', '*::selection { background: lime !important; color: black !important; }') },
        { id: 'stretchyHover', name: 'Stretchy Image Hover', action: () => injectCSS('sth', 'img:hover { transform:scaleY(3); transition:transform 0.3s; z-index:9999; position:relative; }') },
        { id: 'phantomClicks', name: 'Phantom Clicks', action: () => setInterval(() => { const d=document.createElement('div'); d.style.cssText=`position:fixed;width:20px;height:20px;border:2px solid red;border-radius:50%;left:${Math.random()*100}vw;top:${Math.random()*100}vh;pointer-events:none;transition:all 0.5s;z-index:9999;`; document.body.appendChild(d); setTimeout(()=>{d.style.transform='scale(3)';d.style.opacity=0;},10); setTimeout(()=>d.remove(),500); }, 300) },

        // MEDIA & MISC
        { id: 'cageMode', name: 'Nicolas Cage Replacer', action: () => document.querySelectorAll('img').forEach(img => { img.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Nicolas_Cage_Deauville_2013.jpg'; img.srcset = ''; img.style.objectFit = 'cover'; }) },
        { id: 'roundImages', name: 'Circular Images', action: () => document.querySelectorAll('img').forEach(i => i.style.borderRadius = '50%') },
        { id: 'hyperSpeed', name: 'Hyper Speed Videos', action: () => document.querySelectorAll('video').forEach(v => v.playbackRate = 10) },
        { id: 'slowMo', name: 'Slow-Mo Videos', action: () => document.querySelectorAll('video').forEach(v => v.playbackRate = 0.1) },
        { id: 'watermark', name: 'Hypercam Watermark', action: () => { const d=document.createElement('div'); d.textContent='UNREGISTERED HYPERCAM 2'; d.style.cssText='position:fixed;top:10px;left:10px;font-size:30px;color:white;text-shadow:2px 2px 0 red;z-index:999999;pointer-events:none;font-family:sans-serif;font-weight:bold;'; document.body.appendChild(d); } },
        { id: 'snowfall', name: 'Matrix Snowfall', action: () => { injectCSS('snw', '@keyframes fl { 0%{transform:translateY(-10vh);} 100%{transform:translateY(110vh);} } .sn { position:fixed; color:#00ff00; font-size:20px; z-index:99999; animation:fl 3s linear infinite; pointer-events:none; text-shadow:0 0 5px #00ff00; }'); for(let i=0;i<50;i++){ let s=document.createElement('div'); s.className='sn'; s.textContent=String.fromCharCode(33+Math.random()*90); s.style.left=Math.random()*100+'vw'; s.style.animationDuration=(Math.random()*2+2)+'s'; s.style.animationDelay=(Math.random()*2)+'s'; document.body.appendChild(s); } } },
        { id: 'infiniteScroll', name: 'Infinite Scroll Trap', action: () => setInterval(() => window.scrollTo(0, 0), 100) },
        { id: 'swapImages', name: 'Swap All Images', action: () => { const imgs = Array.from(document.images); const srcs = imgs.map(i => i.src); imgs.forEach((img, i) => img.src = srcs[(i+1) % srcs.length]); } },
        { id: 'upsideDown', name: 'Upside Down Page', action: () => document.body.style.transform = 'rotate(180deg)' },
        { id: 'mirror', name: 'Mirror Dimension', action: () => document.body.style.transform = 'scaleX(-1)' }
    ];

    // 4. Build the Grid Interface for Checkboxes
    const modulesDiv = document.createElement('div');
    modulesDiv.style.cssText = 'padding:15px; border:1px solid rgba(0,255,204,0.3); display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; max-height:400px; overflow-y:auto; background:rgba(0,0,0,0.8); border-radius: 5px;';
    
    injectCSS('nebula-scroll', '#nebula-master-panel div::-webkit-scrollbar { width: 8px; } #nebula-master-panel div::-webkit-scrollbar-track { background: #050505; } #nebula-master-panel div::-webkit-scrollbar-thumb { background: #00ffcc; border-radius: 4px; }');

    const checkboxes = {};

    payloads.forEach(payload => {
        const label = document.createElement('label');
        label.style.cssText = 'cursor:pointer; font-size:0.85em; display:flex; align-items:center; gap:8px; padding: 6px; border-radius: 4px; transition: all 0.2s; border: 1px solid transparent; color: #aaa; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
        label.onmouseover = () => { label.style.background = 'rgba(0, 255, 204, 0.1)'; label.style.borderColor = 'rgba(0, 255, 204, 0.5)'; label.style.color = '#fff'; };
        label.onmouseout = () => { label.style.background = 'transparent'; label.style.borderColor = 'transparent'; label.style.color = '#aaa'; };
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = payload.id;
        input.style.minWidth = '16px';
        input.style.height = '16px';
        input.style.accentColor = '#ff0055'; 
        
        const span = document.createElement('span');
        span.textContent = payload.name;

        if(['customText', 'customImg', 'purge'].includes(payload.id)) {
            span.style.color = '#ff0055';
            span.style.fontWeight = 'bold';
        }

        label.appendChild(input);
        label.appendChild(span);
        modulesDiv.appendChild(label);
        
        checkboxes[payload.id] = { element: input, action: payload.action };
    });

    container.appendChild(modulesDiv);

    // 5. Build Confirm Button
    const btnContainer = document.createElement('div');
    btnContainer.style.textAlign = 'center';
    btnContainer.style.marginTop = '30px';
    const confirmBtn = document.createElement('button');
    confirmBtn.textContent = 'EXECUTE NEBULA PROTOCOL';
    confirmBtn.style.cssText = 'background: linear-gradient(45deg, #110000, #330000); color:#ff0055; border:2px solid #ff0055; padding:15px 40px; font-size:1.3em; font-family:monospace; cursor:pointer; font-weight:bold; letter-spacing:3px; box-shadow:0 0 20px rgba(255, 0, 85, 0.6); border-radius: 5px; text-transform: uppercase; transition: transform 0.2s;';
    confirmBtn.onmouseover = () => confirmBtn.style.transform = 'scale(1.05)';
    confirmBtn.onmouseout = () => confirmBtn.style.transform = 'scale(1)';
    btnContainer.appendChild(confirmBtn);
    container.appendChild(btnContainer);

    document.body.appendChild(overlay);

    // 6. Activation Logic
    confirmBtn.addEventListener('click', () => {
        const activeActions = [];
        payloads.forEach(p => {
            if (checkboxes[p.id].element.checked) {
                activeActions.push(checkboxes[p.id].action);
            }
        });

        if (activeActions.length === 0) {
            alert("[ERROR] FreshAssassin, you need to select at least one payload!");
            return;
        }

        overlay.remove();

        activeActions.forEach(action => {
            try { action(); } catch (e) { console.log("A payload encountered a restriction:", e); }
        });
    });
})();
