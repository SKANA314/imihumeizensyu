// ~~~~~~~~~~~~~~~~~~~~~~~~~~
// 関数
// ~~~~~~~~~~~~~~~~~~~~~~~~~~
// 画面を読み込んだら関数を起動
window.addEventListener("load",load_handler);
function load_handler(){
    // メニューを作成
    menu();
    // 非同期処理
    (async () => {
    // 要素を取得してテンプレートを割り当て
    // 取得したいクラスの一覧
    let check_list=["character","magic_table","item","nosos","magic_text"];
    for(let i=0;i<check_list.length;i++){
        // 特定のクラスを持つ要素を全部取得
        let get_query=document.querySelectorAll("."+check_list[i]);
        // 要素があればそこからIDを取得
        let id_list=[];
        // 要素がある場合
        if(get_query.length>0){
            // jsonを取得
            let fetch_url="";
            switch (check_list[i]) {
                case "character":
                    fetch_url="../../data/character.json";
                    break;
                case "magic_table":
                case "magic_text":
                    fetch_url="../../data/magic.json";
                    break;
                case "item":
                    fetch_url="../../data/item.json";
                    break;
                case "nosos":
                    fetch_url="../../data/nosos.json";
                    break;            
                default:
                    break;
            }
            let data = await getData(fetch_url);
            // HTMLからIDを取得
            for(let j=0;j<get_query.length;j++){
                id_list.push(get_query[j].innerHTML.replace(/\s+/g, '')); // 空白を削除してIDを取得
            } 
            // テンプレートを割り当て
            for (let k = 0; k < id_list.length; k++) {
                get_query[k].innerHTML=ApplyTemplate(check_list[i],id_list[k],data);
            }
        }
    }
    })();
}
// メニューの関数
function menu(){
    let menu=document.querySelector("#menu");
    menu.innerHTML=`
        <a href="../home/ImihumeiZenshu.html">ホーム</a>
            <details name="menu">
                <summary>世界法則</summary>
                <div>
                    <li><a href="../world_order/ArchetypeTowerBattle.html">元型タワーバトル</a></li>
                </div>
            </details>
            <details name="menu">
                <summary>傍流学派</summary>
                <div>
                    <li><a href="../cotree/magic_survival_ch_fandom.html">マジックサバイバーズチャンネルファンダム</a></li>
                </div>
            </details>
            <a href="../magic/magic.html">魔法</a>
            <a href="../item/item.html">アイテム</a>
            <a href="../nosos/nosos.html">魔法病</a>
            <a href="../vermin/vermin.html">害魔</a>
        `;
}
// ボタンによるメニューの表示切り替え
let hamburger=document.querySelector("#hamburger");
hamburger.addEventListener("click",function(){
    hamburger.innerHTML=hamburger.innerHTML=="≡"?"×":"≡";
    let menu=document.querySelector(".menu");
    if (menu.style.display=="block"){
        menu.style.display="none";
        hamburger.innerHTML="≡";
    }
    else{
        menu.style.display="block";
        hamburger.innerHTML="×";

    } 
});
// 画面サイズによるメニューの表示切り替え
window.addEventListener("resize",function(){
    let menu=document.querySelector(".menu");
    if(window.innerWidth>800){
        menu.style.display="block";
    }else{
        menu.style.display="none";
    }
});

// jsonを取得する関数
async function getData(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('ネットワークエラーが発生しました');
    }

    const data = await response.json();
    return data; // ← これが getData() の返り値になる
}

// テンプレートを割り当てる関数
function ApplyTemplate(classtype,id,list={key:{name:"",ruby:"",category:"",type:"",skill:"",target:"",cost:"",effect:"",invocation_verse:"",about:"",authority:"",rank:"",attack:"",defense:"",source:"",HP:"",area:"",soul_skill:"",true_form:"",storage:"",requirements:"",quantity:"",ownership_type:"",ingredients:"",desire:"",prerequisite:"",prescription:"",patient:"",strength:"",onset:""}}){
    for(let i=0;i<id.length;i++){
        // テンプレートを割り当て
        switch (classtype) {
            case "character":
                return(
                `<div class="character">
                    <table>
                        <tr>
                            <th colspan="8" class="title">
                                <div class="name">
                                    <ruby>${list[id].name}<rt class="ruby">${list[id].ruby}</rt></ruby>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th>分類</th>
                            <td colspan="5" class="category">${list[id].category}</td>
                            <th>ランク</th>
                            <td class="rank">${list[id].rank}</td>
                        </tr>
                        <tr>
                            <th>攻撃</th>
                            <td class="attack">${list[id].attack}</td>
                            <th>防御</th>
                            <td class="defense">${list[id].defense}</td>
                            <th>根源</th>
                            <td class="sourse">${list[id].source}</td>
                            <th>魔力</th>
                            <td class="HP">${list[id].HP}</td>
                        </tr>
                        <tr>
                            <th>領域</th>
                            <td class="area">${list[id].area}</td>
                            <th>特技</th>
                            <td colspan=" 5" class="skill">${list[id].skill}</td>
                        </tr>
                        ${list[id].soul_skill ? `<tr>
                                <th>魂の特技</th>
                                <td colspan="7" class="soul_skill">${list[id].soul_skill}</td>
                            </tr>` : ''}
                        ${list[id].true_form ? `<tr>
                            <th>真の姿</th>
                            <td colspan="7" class="true_form">${list[id].true_form}</td>
                        </tr>` : ''}
                        <tr>
                            <th>魔法</th>
                            <td colspan="7" class="magic">${list[id].magic}</td>
                        </tr>
                        <tr>
                            <th>概説</th>
                            <td colspan="7" class="about">${list[id].about}</td>
                        </tr>
                        ${list[id].authority ? `<tr>
                            <th>出典</th>
                            <td colspan="7" class="authority">${list[id].authority}</td>
                        </tr>` : ''}
                    </table>
                </div>
                <br>`);
            case "magic_table":
                return(
                `<div class="magic">
                    <table>
                        <tr>
                            <th colspan="4" class="title">
                                <div class="magic_square"></div>
                                <div class="name">
                                    <ruby>${list[id].name}<rt class="ruby">${list[id].ruby}</rt></ruby>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th>分類</th>
                            <td colspan="3" class="category">${list[id].category}</td>
                        </tr>
                        <tr>
                            <th>タイプ</th>
                            <td class="type">${list[id].type}</td>
                            <th>指定特技</th>
                            <td  class="skill">${list[id].skill}</td>
                        </tr>
                        <tr>
                            <th>目標</th>
                            <td colspan="3" class="target">${list[id].target}</td>
                        </tr>
                        <tr>
                            <th>コスト</th>
                            <td colspan="3" class="cost">${list[id].cost}</td>
                        </tr>
                        <tr>
                            <th>効果</th>
                            <td colspan="3" class="effect">${list[id].effect}</td>
                        </tr>
                        <tr>
                            <th>呪句</th>
                            <td colspan="3" class="invocation_verse">${list[id].invocation_verse}</td>
                        </tr>
                        <tr>
                            <th>概要</th>
                            <td colspan="3" class="about">${list[id].about}</td>
                        </tr>
                        ${list[id].authority ? `<tr>
                            <th>出典</th>
                            <td colspan="3" class="authority">${list[id].authority}</td>
                        </tr>` : ''}
                    </table>
                </div>
                <br>`);
            case "magic_text":
                return(
                `<div class="magic_text">
                    <span>
                        【<b class="name">${list[id].name}</b><b class="ruby">${list[id].ruby ? "("+list[id].ruby+")" : ""}</b>】<rt class="category">${list[id].category}</rt> <rt class="type">${list[id].type}</rt><br>
                        <b>目標:</b><span class="target">${list[id].target}　</span><wbr>
                        <b>コスト:</b><span class="cost">${list[id].cost}　</span><wbr>
                        <b>指定特技:</b><span class="skill">${list[id].skill}　</span><br>
                        <span class="effect">${list[id].effect}</span><br>
                        <span class="invocation_verse"><i>${list[id].invocation_verse}</i></span>
                    </span>
                </div>
                <br>`);
            case "item":
                return(
                `<div class="${list[id].category}">
                    <table>
                        <tr>
                            <th colspan="6" class="title">
                                <div class="name">
                                    <ruby>${list[id].name}<rt class="ruby">${list[id].ruby}</rt></ruby>
                                </div>
                            </th>
                        </tr>
                        ${list[id].storage ? `<tr>
                            <th>収蔵先</th>
                            <td colspan="5" class="storage">${list[id].storage}</td>
                        </tr>` : ''}
                        <tr>
                            <th>使用資格</th>
                            <td colspan="5" class="requirements">${list[id].requirements || "なし"}</td>
                        </tr>
                        <tr>
                            <th>必要功績点</th>
                            <td class="cost">${list[id].cost}</td>
                            <th>個数</th>
                            <td class="quantity">${list[id].quantity}</td>
                            <th>所有形式</th>
                            <td class="ownership_type">${list[id].ownership_type}</td>
                        </tr>
                        ${list[id].ingredients ? `<tr>
                            <th>材料</th>
                            <td colspan="5" class="ingredients">${list[id].ingredients}</td>
                        </tr>` : ''}
                        ${list[id].skill ? `<tr>
                            <th>指定特技</th>
                            <td colspan="5" class="skill">${list[id].skill}</td>
                        </tr>` : ''}
                        ${list[id].desire ? `<tr>
                            <th>欲求</th>
                            <td colspan="5" class="desire">${list[id].desire}</td>
                        </tr>` : ''}
                        <tr>
                            <th>効果</th>
                            <td colspan="5" class="effect">${list[id].effect}</td>
                        </tr>
                        <tr>
                            <th>概説</th>
                            <td colspan="5" class="about">${list[id].about}</td>
                        </tr>
                        ${list[id].authority ? `<tr>
                            <th>出典</th>
                            <td colspan="5" class="authority">${list[id].authority}</td>
                        </tr>` : ''}
                    </table>
                </div>
                <br>`);
            case "nosos":
                return(
                `<div class="nosos">
                    <table>
                        <tr>
                            <th colspan="4" class="title">
                                <div class="name">
                                    <ruby>${list[id].name}<rt class="ruby">${list[id].ruby}</rt></ruby>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th>患者</th>
                            <td class="patient">${list[id].patient}</td>
                            <th>強度</th>
                            <td class="strength">${list[id].strength}</td>
                        </tr>
                        <tr>
                            <th>前提</th>
                            <td colspan="3" class="prerequisite">${list[id].prerequisite}</td>
                        </tr>
                        <tr>
                            <th>処方箋</th>
                            <td colspan="3" class="prescription">${list[id].prescription}</td>
                        </tr>
                        <tr>
                            <th>指定特技</th>
                            <td colspan="3" class="skill">${list[id].skill}</td>
                        </tr>
                        <tr>
                            <th>発症</th>
                            <td colspan="3" class="onset">${list[id].onset}</td>
                        </tr>
                        <tr>
                            <th>症状</th>
                            <td colspan="3" class="effect">${list[id].effect}</td>
                        </tr>
                        <tr>
                            <th>概説</th>
                            <td colspan="3" class="about">${list[id].about}</td>
                        </tr>
                        ${list[id].authority ? `<tr>
                            <th>出典</th>
                            <td colspan="3" class="authority">${list[id].authority}</td>
                        </tr>` : ''}
                    </table>
                </div>
                <br>`);
            default:
                break;
        }
    }
}
