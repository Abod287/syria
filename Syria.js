





let c, ctx, W, H, arr = [];



const random = (max=1, min=0) => Math.random() * (max - min) + min;



const rp = (a,b,c,) => a+(b-a)*c;



const flag = () => {


    ctx.fillStyle = '#000000';

    ctx.fillRect(W/2-150, H/2, 300, 50);

    ctx.fill();   

    ctx.fillStyle = '#d50000';

    ctx.fillRect(W/2-150, H/2-100, 300, 50);

    ctx.fill();

    ctx.fillStyle = '#fafafa';

    ctx.fillRect(W/2-150, H/2-50, 300, 50);

    ctx.fill();   

    ctx.fillStyle = '#64dd17';

    ctx.font = "lighter 50px Arial";

    ctx.textAlign = "center";

    ctx.textBaseline = "middle";

    ctx.fillText("🔥syria🔥", W/2, H/2+150);

    ctx.fillStyle = 'green';

    ctx.font = "lighter 50px Arial";

    ctx.textAlign = "center";

    ctx.textBaseline = "middle";

    ctx.fillText("💚      💚", W/2, H/2-23);

    

    ctx.fillStyle = '#ffdd17';

    ctx.font = "أخف 15 بكسل Arial"؛

    ctx.textAlign = "مركز" ؛

    ctx.textBaseline = "وسط" ؛

    ctx.fillText ("بقلم: ๖ ۣۜ A๖ ۣۜ B๖ ۣۜ D🇸🇾" ، W / 4 ، H / 2-175) ؛

    

} ؛



const arrFlag = () => {

    دع m = ctx.getImageData (0،0، W، H) ؛

    لـ (let i = 0 ؛ i <m.data.length ؛ i + = 4) {

        دع أ = m.data [i + 3]> 0؟ m.data [i + 3]> 200 && m.data [i + 3]> 200؟ عشوائي (6.28): عشوائي (3.14): عشوائي (6.28.3.14)

        دعونا rad = m.data [i + 3]> 200 && m.data [i + 3]> 200؟ عشوائي (60): 100   

        arr.push (i / 4٪ W ، ~~ (i / 4 / W) ، m.data [i] ، m.data [i + 1] ، m.data [i + 2] ، m.data [i +3]، m.data [i + 3]> 0؟ W / 2 + rad * Math.cos (a): i / 6٪ W، m.data [i + 3]> 0؟ H / 2-100 + rad * Math.sin (a): ~~ (i / 6 / W)، rad + 2 * Math.cos (a)، a، random (1.3،0.7)، 0.03) ؛            

    }

} ؛



const uk = () => {

    var m = ctx.createImageData (W، H) ؛

    لـ (let i = 0 ؛ i <arr.length ؛ i + = 12) {

    دع j = ~~ (Math.round (arr [i + 6]) + Math.round (arr [i + 7]) * W) * 4

        m.data [j] = arr [i + 2] 

        m.data [j + 1] = arr [i + 3]

        m.data [j + 2] = arr [i + 4]

        m.data [j + 3] = arr [i + 5]        

        إذا (arr [i + 8]> 0 && arr [i + 3]> 0) {

            arr [i + 9] + = arr [i + 11]

            arr [i + 8] - = arr [i + 10]

            arr [i + 6] = W / 2 + arr [i + 8] * Math.cos (arr [i + 9])

            arr [i + 7] = 100 + arr [i + 8] * Math.sin (arr [i + 9])

        }

        آخر{

            arr [i + 6] = rp (arr [i + 6]، arr [i]، 0.02)

            arr [i + 7] = rp (arr [i + 7]، arr [i + 1]، 0.02)

         

        }    

    }

    ctx.putImageData (م، 0،0) ،

} ؛



تحريك مستمر = () => {

    المملكة المتحدة()؛

    requestAnimationFrame (تحريك) ؛

} ؛



الحرف الأول = () => {

    c = document.getElementById ("canvas") ؛

    c.width = W = window.innerWidth ؛

    c.height = H = window.innerHeight ؛

    ctx = c.getContext ("2d") ؛

    علَم()

    arrFlag () ،

    تحريك ()

} ؛



onload = init;
