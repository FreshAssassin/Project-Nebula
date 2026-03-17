(function() {
    if (document.getElementById('nebula-master-panel')) return;

    // Helper to safely inject CSS
    const injectCSS = (id, css) => {
        if(document.getElementById(id)) return;
        const style = document.createElement('style');
        style.id = id;
        style.textContent = css;
        document.head.appendChild(style);
    };

    // Native Synth for Funny Sounds
    const snd = (f, t, d) => {
        try {
            const x = new (window.AudioContext || window.webkitAudioContext)();
            const o = x.createOscillator(); const g = x.createGain();
            o.type = t; o.frequency.value = f; o.connect(g); g.connect(x.destination);
            g.gain.setValueAtTime(0.1, x.currentTime); o.start();
            setTimeout(() => { o.stop(); x.close(); }, d);
        } catch(e) {}
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

    const textInput = document.createElement('input');
    textInput.id = 'nebula-custom-text';
    textInput.placeholder = 'FreshAssassin owns this page...';
    textInput.style.cssText = 'width: 100%; padding: 8px; margin-top: 5px; margin-bottom: 15px; background: #111; border: 1px solid #00ffcc; color: lime; font-family: monospace; box-sizing: border-box;';
    customZone.appendChild(textInput);

    const imgInput = document.createElement('input');
    imgInput.id = 'nebula-custom-img';
    imgInput.placeholder = 'Paste image URL here...';
    imgInput.style.cssText = 'width: 100%; padding: 8px; margin-top: 5px; background: #111; border: 1px solid #00ffcc; color: lime; font-family: monospace; box-sizing: border-box;';
    customZone.appendChild(imgInput);

    container.appendChild(customZone);

    // 3. The Ultimate Payload List
    const payloads = [
        // 🔥 SIGNATURES
        { id: 'kusarigama', name: '🗡️ KUSARIGAMA KATANA', action: () => {
            injectCSS('nb-blade', `* { cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'><text y='40' font-size='40' transform='rotate(-45 24 24)'>🗡️</text></svg>") 0 0, auto !important; } .nb-rip { position:fixed; pointer-events:none; z-index:999998; transition: transform 0.8s, opacity 0.8s; }`);
            document.addEventListener('click', e => {
                if (e.target.closest('#nebula-master-panel')) return;
                const t = e.target; const r = t.getBoundingClientRect();
                const l = t.cloneNode(true); const rw = t.cloneNode(true);
                l.className = rw.className = 'nb-rip';
                const s = `top:${r.top+window.scrollY}px;left:${r.left+window.scrollX}px;width:${r.width}px;height:${r.height}px;`;
                l.style.cssText = s + `clip-path:inset(0 ${r.width/2}px 0 0);`; rw.style.cssText = s + `clip-path:inset(0 0 0 ${r.width/2}px);`;
                document.body.appendChild(l); document.body.appendChild(rw); t.style.visibility = 'hidden';
                setTimeout(() => { l.style.transform = 'translate(-150px, 100px) rotate(-30deg)'; rw.style.transform = 'translate(150px, 100px) rotate(30deg)'; l.style.opacity = rw.style.opacity = '0'; }, 10);
            }, true);
        }},
        { id: 'madron', name: '😡 MADRON HUTCHERSON', action: () => {
            new Audio('https://raw.githubusercontent.com/FreshAssassin/Project-Nebula/main/lv_0_20260317155018.mp3').play();
            document.querySelectorAll('img').forEach(i => { i.src = 'https://raw.githubusercontent.com/FreshAssassin/Project-Nebula/main/c6efcb98-b4dd-484f-88ce-31d3f6b123e5.jpg'; i.srcset = ''; });
        }},
        { id: 'customText', name: '🔥 INJECT CUSTOM TEXT', action: () => { 
            const txt = document.getElementById('nebula-custom-text').value || 'FreshAssassin'; 
            const walker = document.createTreeWalker(document.body, 4, null, false);
            let n; while (n = walker.nextNode()) { if (n.nodeValue.trim() !== '') n.nodeValue = txt; }
        }},
        { id: 'customImg', name: '🔥 INJECT CUSTOM IMAGE', action: () => { 
            const url = document.getElementById('nebula-custom-img').value || 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Nicolas_Cage_Deauville_2013.jpg'; 
            document.querySelectorAll('img').forEach(img => { img.src = url; img.srcset = ''; }); 
        }},

        // 🤡 MEMES & JUMPSCARES
        { id: 'm_pork', name: '🐷 JOHN PORK CALLING', action: () => {
            const i = document.createElement('img'); i.src = 'https://i.scdn.co/image/ab67616d0000b273ffe8ad517ca19e5e1edf2ff3';
            i.style.cssText = 'position:fixed;bottom:20px;right:20px;width:300px;z-index:999999;border-radius:20px;border:5px solid lime;';
            document.body.appendChild(i); setInterval(() => snd(600, 'sine', 200), 1000);
        }},
        { id: 'm_jumpscare', name: '👻 GHOST JUMPSCARE', action: () => {
            const i = document.createElement('img'); i.src = 'https://i.pinimg.com/originals/87/0d/37/870d3716a7f15303e633e226e131daf1.gif';
            i.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:2147483647;object-fit:cover;';
            document.body.appendChild(i); snd(200, 'sawtooth', 1000); setTimeout(() => i.remove(), 2000);
        }},
        { id: 'm_doakes', name: '🕵️ SURPRISE MTHRFCKR', action: () => {
            const i = document.createElement('img'); i.src = 'https://media1.tenor.com/m/GhKypU0mrlEAAAAd/dexter.gif';
            i.style.cssText = 'position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:500px;z-index:999999;';
            document.body.appendChild(i); setTimeout(() => i.remove(), 3000);
        }},

        // 🔊 SOUNDS
        { id: 's_earRinger', name: '🔊 Ear Ringer (High Pitch)', action: () => setInterval(() => snd(8000, 'sine', 2000), 3000) },
        { id: 's_honk', name: '🖱️ Click = HONK', action: () => document.addEventListener('click', () => snd(300, 'square', 200)) },
        { id: 's_ufo', name: '👽 UFO Hover Sound', action: () => setInterval(() => { snd(400, 'sine', 100); snd(450, 'sine', 100, 100); }, 300) },

        // ⚠️ FAKES
        { id: 'ransomware', name: 'Fake Ransomware', action: () => {
            const d = document.createElement('div');
            d.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:red;z-index:9999999;display:flex;flex-direction:column;align-items:center;justify-content:center;color:white;font-family:sans-serif;text-align:center;';
            d.innerHTML = '<h1 style="font-size:5em;">SYSTEM ENCRYPTED</h1><p style="font-size:2em;">Pay FreshAssassin 1 BTC to unlock.</p>';
            document.body.appendChild(d);
        }},
        { id: 'bsod', name: 'Fake BSOD', action: () => {
            const d = document.createElement('div');
            d.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:#0000aa;z-index:9999999;color:white;font-family:monospace;padding:50px;font-size:24px;';
            d.innerHTML = 'A fatal exception 0E has occurred at 028:C0011E36...<br><br>Press any key to continue _';
            document.body.appendChild(d);
        }},

        // 🪐 PHYSICS & VISUALS
        { id: 'gravity', name: 'CSS Gravity (Fall)', action: () => document.querySelectorAll('p, img, div, h1, button').forEach(el => { el.style.transition = 'transform 2s ease-in'; el.style.transform = `translateY(150vh) rotate(${Math.random() * 90}deg)`; }) },
        { id: 'barrelRoll', name: 'Barrel Roll', action: () => { document.body.style.transition = 'transform 4s'; document.body.style.transform = 'rotate(360deg)'; } },
        { id: 'deepFry', name: 'Deep Fryer', action: () => document.body.style.filter = 'contrast(500%) saturate(800%)' },
        { id: 'matrixTheme', name: 'Matrix Mode', action: () => { document.body.style.backgroundColor='black'; injectCSS('mtx', '* { color:#0f0 !important; font-family:monospace !important; }'); } },
        { id: 'snowfall', name: 'Matrix Snowfall', action: () => { 
            injectCSS('snw', '@keyframes fl { 0%{transform:translateY(-10vh);} 100%{transform:translateY(110vh);} } .sn { position:fixed; color:#0f0; font-size:20px; z-index:99999; animation:fl 3s linear infinite; pointer-events:none; }'); 
            for(let i=0;i<50;i++){ let s=document.createElement('div'); s.className='sn'; s.textContent='01'; s.style.left=Math.random()*100+'vw'; s.style.animationDuration=(Math.random()*2+2)+'s'; document.body.appendChild(s); } 
        }},
        { id: 'dvdBouncer', name: 'DVD Bouncer', action: () => { 
            const d=document.createElement('div'); d.style.cssText='position:fixed;width:100px;height:50px;background:red;z-index:999999;display:flex;align-items:center;justify-content:center;font-weight:bold;color:white;'; d.textContent='DVD'; document.body.appendChild(d);
            let x=0, y=0, vx=5, vy=5; setInterval(() => { x+=vx; y+=vy; if(x<0||x>innerWidth-100)vx*=-1; if(y<0||y>innerHeight-50)vy*=-1; d.style.left=x+'px'; d.style.top=y+'px'; }, 20);
        }},
        { id: 'purge', name: '🔥 VISUAL DOM PURGE', action: () => { document.body.replaceChildren(); document.body.style.background='black'; const h=document.createElement('h1'); h.textContent='HACKED'; h.style.cssText='color:cyan;text-align:center;margin-top:40vh;font-size:5em;'; document.body.appendChild(h); }}
    ];

    // 4. Build Grid
    const modulesDiv = document.createElement('div');
    modulesDiv.style.cssText = 'padding:15px; border:1px solid rgba(0,255,204,0.3); display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; max-height:400px; overflow-y:auto; background:rgba(0,0,0,0.8); border-radius: 5px;';
    injectCSS('nb-scroll', '#nebula-master-panel div::-webkit-scrollbar { width: 8px; } #nebula-master-panel div::-webkit-scrollbar-thumb { background: #00ffcc; border-radius: 4px; }');

    const checkboxes = {};
    payloads.forEach(p => {
        const label = document.createElement('label');
        label.style.cssText = 'cursor:pointer; font-size:0.85em; display:flex; align-items:center; gap:8px; padding: 6px; color: #aaa;';
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = p.id;
        input.style.accentColor = '#ff0055';
        const span = document.createElement('span');
        span.textContent = p.name;
        if(p.id === 'madron' || p.id === 'kusarigama') span.style.color = '#ff0055';
        label.appendChild(input); label.appendChild(span); modulesDiv.appendChild(label);
        checkboxes[p.id] = { element: input, action: p.action };
    });
    container.appendChild(modulesDiv);

    // 5. Confirm Button
    const btnContainer = document.createElement('div');
    btnContainer.style.textAlign = 'center'; btnContainer.style.marginTop = '30px';
    const confirmBtn = document.createElement('button');
    confirmBtn.textContent = 'EXECUTE NEBULA PROTOCOL';
    confirmBtn.style.cssText = 'background: #110000; color:#ff0055; border:2px solid #ff0055; padding:15px 40px; cursor:pointer; font-weight:bold; letter-spacing:3px; box-shadow:0 0 20px #ff0055;';
    btnContainer.appendChild(confirmBtn); container.appendChild(btnContainer);

    document.body.appendChild(overlay);

    // 6. Execution
    confirmBtn.addEventListener('click', () => {
        const active = payloads.filter(p => checkboxes[p.id].element.checked);
        if (active.length === 0) return alert("FreshAssassin, select a payload!");
        overlay.remove();
        active.forEach(p => { try { p.action(); } catch(e) {} });
    });
})();
