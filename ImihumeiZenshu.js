// 魔法のデータ
let magic_list={
    "template":{
        name:"",// 名前
        ruby:"",// ふりがな
        category:"",// 分類
        type:"",// タイプ
        skill:"",// 指定特技
        target:"",// 目標
        cost:"",// コスト
        effect:"",// 効果
        invocation_verse:"",// 呪句
        about:""// 概要
    },
    "転換":{
        name:"転換",
        ruby:"スワップ",
        category:"遺失魔法", 
        type:"呪文",
        skill:"エロス",
        target:"キャラクター1",
        cost:"獣2",
        effect:"自分の手番に使用できる。<br>指定特技の判定に成功すると、そのセッションの間、目標の性別を逆転させる。目標が「無性」など性別を持たない場合<a  href=\"\">「無性性性変化障害 」</a>を発症する。目標が「両性」など性転換できない性別場合、運命変転を受ける。",
        invocation_verse:"",
        about:"性転換を起こす魔法",
        authority:"<a  href=\"https://talto.cc/projects/6pcWA-bPbmfAOhMsSBqL_\">病気の断章が見つかった！！！</a>"
    },
    "移動":{
        name:"移動",// 名前
        ruby:"シフト",// ふりがな
        category:"遺失魔法",// 分類
        type:"呪文",// タイプ
        skill:"なし",// 指定特技
        target:"本文参照",// 目標
        cost:"なし",// コスト
        effect:"自分の手番に使用できる。<br>「元型バトルシート」にいる元型1体を目標に選ぶ。目標のを横方向に1マス移動させる。移動するスペースがなければこの魔法は使用できない。",// 効果
        invocation_verse:"",// 呪句
        about:"世界法則<a  href=\"../world_order/ArchetypeTowerBattle.html\">「元型タワーバトル」</a>で効果を発揮する。元型を移動させる魔法。",// 概要
        authority:"<a  href=\"https://talto.cc/projects/eQgwQ8ztjdkZR8zbsSXYP\">元型タワーバトル</a>"
    },
    "棘玉":{
        name:"棘玉",// 名前
        ruby:"プリクル",// ふりがな
        category:"遺失魔法",// 分類
        type:"装備",// タイプ
        skill:"なし",// 指定特技
        target:"自分",// 目標
        cost:"なし",// コスト
        effect:"「元型バトルシート」にいる自分の元型の上に他の元型がぶつかったとき、ぶつかった元型を使役しているキャラクターに1点のダメージを与える。",// 効果
        invocation_verse:"",// 呪句
        about:"世界法則<a  href=\"../world_order/ArchetypeTowerBattle.html\">「元型タワーバトル」</a>で効果を発揮する。元型に棘の鎧を装備する魔法。",// 概要
        authority:"<a  href=\"https://talto.cc/projects/eQgwQ8ztjdkZR8zbsSXYP\">元型タワーバトル</a>"
    },
    "登攀":{
        name:"登攀",// 名前
        ruby:"クライミング",// ふりがな
        category:"遺失魔法",// 分類
        type:"装備",// タイプ
        skill:"なし",// 指定特技
        target:"自分",// 目標
        cost:"なし",// コスト
        effect:"「元型バトルシート」にいる自分の元型の上に他の元型がぶつかったとき、それらの位置を入れ替える。このとき、元型を横方向に動かすことはできず、入れ替わるスペースがなければこの効果は発生しない。",// 効果
        invocation_verse:"",// 呪句
        about:"世界法則<a  href=\"../world_order/ArchetypeTowerBattle.html\">「元型タワーバトル」</a>で効果を発揮する。元型に他の元型をよじ登ることができる腕を生やす。",// 概要
        authority:"<a  href=\"https://talto.cc/projects/eQgwQ8ztjdkZR8zbsSXYP\">元型タワーバトル</a>"
    },
    "崩れる体":{
        name:"崩れる体",// 名前
        ruby:"",// ふりがな
        category:"",// 分類
        type:"装備",// タイプ
        skill:"なし",// 指定特技
        target:"自分",// 目標
        cost:"なし",// コスト
        effect:"このキャラクターがダメージを受けたとき、自分の立会人にピースゴーレムが現れる。この効果で現れるピースゴーレムの魔力の現在値と最大値はこの時受けたダメージに等しい。",// 効果
        invocation_verse:"",// 呪句
        about:"",// 概要
        authority:""
    }
};
// アイテムデータ
let item_list={
    "template":{
        name:"テンプレート",
        ruby:"ふりがな",
        requirements:"",// 使用資格
        cost:"",// 必要功績点
        quantity:"",// 個数
        ownership_type:"",// 所有形式
        effect:"",// 効果
        about:"",// 概説
        authority:"<a  href=\"\"></a>"//出典
    }
};
// 魔法料理データ
let goodys_list={
    "template":{
        name:"",// 名前
        ruby:"",// ふりがな
        requirements:"",// 使用資格
        cost:"",// 必要功績点
        quantity:"",// 個数
        ownership_type:"",// 所有形式
        ingredients:[""],// 材料
        skill:[""],// 指定特技
        effect:"",// 効果
        about:"",// 概説
        authority:"<a  href=\"\"></a>"//出典
    }
};
// 魔法病のデータ
let nosos_list={
    "template":{
        name:"",// 名前
        ruby:"",// ふりがな
        patient:"",// 患者
        strength:"",// 強度
        prerequisite:"",// 前提
        prescription:"",// 処方箋
        skill:"",// 指定特技
        onset:"",// 発症
        effect:"",// 症状
        about:"",// 解説
        authority:"<a  href=\"\"></a>"//出典 
    },
    "無性性性変化障害":{
        name:"無性性性変化障害",// 名前
        ruby:"",// ふりがな
        patient:"無性別の魔法生物",// 患者
        strength:"0",// 強度
        prerequisite:"性転換の要因を取り除く",// 前提
        prescription:"獣の残滓1個",// 処方箋
        skill:"《エロス》",// 指定特技
        onset:"性別が変化する効果を受ける",// 発症
        effect:"全身の関節に痛みを発する。また、患者が本来行えた動作が行えなくなる。特に断章は禁書に編纂できなくなる症状が知られている。魔法使いの場合、ランダムに1個属呪が使用できなくなる。",// 症状
        about:"性別がない魔法生物が何らかの要因で性別を変化されると発症する。本来存在しない性別を無理矢理書き換えようとしたことで体や魔法関器官に様々な障害が発症する。",// 解説 
        authority:"<a  href=\"https://talto.cc/projects/6pcWA-bPbmfAOhMsSBqL_\">病気の断章が見つかった！！！</a>"

    },
    "断章間魔法災厄耐性不全":{
        name:"断章間魔法災厄耐性不全",// 名前
        ruby:"",// ふりがな
        patient:"断章",// 患者
        strength:"0",// 強度
        prerequisite:"患者と同じ禁書から分離した断章を1つ以上回収している",// 前提
        prescription:"患者と同じ禁書から分離した断章の残滓1個",// 処方箋
        skill:"処方箋に使用する断章の残滓が持つ特技(複数ある場合はPLが任意に一つ選ぶ)",// 指定特技
        onset:"禁書から断章が分離する",// 発症
        effect:"患者と同じ禁書から分離した断章が引き起こした魔法災厄に対して耐性がなくなる。運命変転が発生した場合、患者も運命変転を受けるようになる。同じ運命変転を2つ受けた場合、【魔力】の最大値が1点増加する。",// 症状
        about:"禁書から断章に分離した際にそれが不十分だと発症する。禁書は本来自分の断章同士がお互いの引き起こす魔法災厄の影響を受けない免疫を持っているが、それが十分に機能しない状態。他の断章の引き起こす魔法災厄による合併障害に注意が必要。また、禁書があらゆる魔法災厄に対して耐性を失う「魔法災厄耐性不全」と酷似した症状のため、判別は難しい。",// 解説 
        authority:"<a  href=\"https://talto.cc/projects/6pcWA-bPbmfAOhMsSBqL_\">病気の断章が見つかった！！！</a>"
    }
};
// 害魔のデータ
let vermin_list={
    "template":{
        name:"",// 名前
        ruby:"",// ふりがな
        category:"害魔()",//分類
        rank:0,// ランク
        attack:0,// 攻撃
        defense:0,// 防御
        source:0,// 根源
        HP:0,// 魔力
        area:"",// 領域
        skill:"",// 特技
        soul_skill:"",//魂の特技
        true_form:"",// 真の姿
        magic:"",// 魔法
        about:"",// 概説
        authority:"<a  href=\"\"></a>"//出典
    },
    "パズルゴーレム":{
        name:"パズルゴーレム",// 名前
        ruby:"",// ふりがな
        category:"害魔(災厄限種魔機属)",//分類
        rank:4,// ランク
        attack:3,// 攻撃
        defense:3,// 防御
        source:3,// 根源
        HP:6,// 魔力
        area:"夢",// 領域
        skill:"《大地》《肉》《謎》《悪意》",// 特技
        soul_skill:"",//魂の特技
        true_form:"防御強化",// 真の姿
        magic:"【緊急召喚】【防壁(基本P.103)】【再生(基本P.122)】<br><div class=\"magic_text\">崩れる体</div>",// 魔法
        about:"異境に生息する害魔、攻撃を受けると体が分裂し、独立して行動するようになる。",// 概説
        authority:"<a  href=\"https://talto.cc/projects/eQgwQ8ztjdkZR8zbsSXYP\">元型タワーバトル</a>"
    },
    "ピースゴーレム":{
        name:"ピースゴーレム",// 名前
        ruby:"",// ふりがな
        category:"害魔(微塵級時限種魔機属)",//分類
        rank:2,// ランク
        attack:2,// 攻撃
        defense:2,// 防御
        source:2,// 根源
        HP:"X",// 魔力
        area:"力",// 領域
        skill:"《雷》《流れ》《謎》《怠惰》",// 特技
        soul_skill:"",//魂の特技
        true_form:"元型変化※元型の象徴は《謎》になる",// 真の姿
        magic:"【無精(黄昏P.150)】【寄攻(基本P.107)】",// 魔法
        about:"パズルゴーレムの分体。他者を支援する能力に長ける。",// 概説
        authority:"<a  href=\"https://talto.cc/projects/eQgwQ8ztjdkZR8zbsSXYP\">元型タワーバトル</a>"
    }
};
// 遺物データ
let relic_list={
    "template":{
        name:"",// 名前
        ruby:"",// ふりがな
        storage:"",// 収蔵先
        requirements:"",// 使用資格
        cost:"",// 必要功績点
        quantity:"",// 個数
        wnership_type:"",// 所有形式
        desire:"",// 欲求
        effect:"",// 効果
        about:"",// 概説
        authority:"<a  href=\"\"></a>"//出典
    }
};
// ~~~~~~~~~~~~~~~~~~~~~~~~~~
// 関数
// ~~~~~~~~~~~~~~~~~~~~~~~~~~
// 画面を読み込んだら関数を起動
window.addEventListener("load",load_handler);
function load_handler(){
    
    menu();
    // 要素を取得してテンプレートを割り当て
    // 取得したいクラスの一覧
    let check_list=["vermin","magic_table","item","goodys","relic","nosos","magic_text"];
    for(i=0;i<check_list.length;i++){
        // 特定のクラスを持つ要素を全部取得
        let get_query=document.querySelectorAll("."+check_list[i]);
        // 要素があればそこからIDを取得
        let id_list=[];
        if(get_query.length>0){
            for(let j=0;j<get_query.length;j++){
                id_list.push(get_query[j].innerHTML);
            }            
            // テンプレートを割り当て
            for (let k = 0; k < id_list.length; k++) {
                get_query[k].innerHTML=ApplyTemplate(check_list[i],id_list[k]);
            }
        }

    }
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

function ApplyTemplate(classtype,id){
    // クラスに対応したテンプレートを割り当て
    for(let i=0;i<id.length;i++){
        // テンプレートを割り当て
        switch (classtype) {
            case "vermin":
                return(
                `<div class="character">
                    <table>
                        <tr>
                            <th colspan="8" class="title title">
                                <div class="name">
                                    <ruby>${vermin_list[id].name}<rt class="ruby">${vermin_list[id].ruby}</rt></ruby>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th>分類</th>
                            <td colspan="5" class="category">${vermin_list[id].category}</td>
                            <th>ランク</th>
                            <td class="rank">${vermin_list[id].rank}</td>
                        </tr>
                        <tr>
                            <th>攻撃</th>
                            <td class="attack">${vermin_list[id].attack}</td>
                            <th>防御</th>
                            <td class="defense">${vermin_list[id].defense}</td>
                            <th>根源</th>
                            <td class="sourse">${vermin_list[id].source}</td>
                            <th>魔力</th>
                            <td class="HP">${vermin_list[id].HP}</td>
                        </tr>
                        <tr>
                            <th>領域</th>
                            <td class="area">${vermin_list[id].area}</td>
                            <th>特技</th>
                            <td colspan=" 5" class="skill">${vermin_list[id].skill}</td>
                        </tr>
                        ${vermin_list[id].soul_skill ? `<tr>
                                <th>魂の特技</th>
                                <td colspan="7" class="soul_skill">${vermin_list[id].soul_skill}</td>
                            </tr>` : ''}
                        ${vermin_list[id].true_form ? `<tr>
                            <th>真の姿</th>
                            <td colspan="7" class="true_form">${vermin_list[id].true_form}</td>
                        </tr>` : ''}
                        <tr>
                            <th>魔法</th>
                            <td colspan="7" class="magic">${vermin_list[id].magic}</td>
                        </tr>
                        <tr>
                            <th>概説</th>
                            <td colspan="7" class="about">${vermin_list[id].about}</td>
                        </tr>
                        ${vermin_list[id].authority ? `<tr>
                            <th>出典</th>
                            <td colspan="7" class="authority">${vermin_list[id].authority}</td>
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
                                    <ruby>${magic_list[id].name}<rt class="ruby">${magic_list[id].ruby}</rt></ruby>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th>分類</th>
                            <td colspan="3" class="category">${magic_list[id].category}</td>
                        </tr>
                        <tr>
                            <th>タイプ</th>
                            <td class="type">${magic_list[id].type}</td>
                            <th>指定特技</th>
                            <td  class="skill">${magic_list[id].skill}</td>
                        </tr>
                        <tr>
                            <th>目標</th>
                            <td colspan="3" class="target">${magic_list[id].target}</td>
                        </tr>
                        <tr>
                            <th>コスト</th>
                            <td colspan="3" class="cost">${magic_list[id].cost}</td>
                        </tr>
                        <tr>
                            <th>効果</th>
                            <td colspan="3" class="effect">${magic_list[id].effect}</td>
                        </tr>
                        <tr>
                            <th>呪句</th>
                            <td colspan="3" class="invocation_verse">${magic_list[id].invocation_verse}</td>
                        </tr>
                        <tr>
                            <th>概要</th>
                            <td colspan="3" class="about">${magic_list[id].about}</td>
                        </tr>
                        ${magic_list[id].authority ? `<tr>
                            <th>出典</th>
                            <td colspan="3" class="authority">${magic_list[id].authority}</td>
                        </tr>` : ''}
                    </table>
                </div>
                <br>`);
            case "magic_text":
                return(
                `<div class="magic_text">
                    <p>
                        【<b class="name">${magic_list[id].name}</b><b class="ruby">${magic_list[id].ruby ? "("+magic_list[id].ruby+")" : ""}</b>】<rt class="category">${magic_list[id].category}</rt> <rt class="type">${magic_list[id].type}</rt><br>
                        <b>目標:</b><rt class="target">${magic_list[id].target}　</rt><wbr>
                        <b>コスト:</b><rt class="cost">${magic_list[id].cost}　</rt><wbr>
                        <b>指定特技:</b><rt class="skill">${magic_list[id].skill}　</rt><br>
                        <rt class="effect">${magic_list[id].effect}</rt><br>
                        <rt class="invocation_verse"><i>${magic_list[id].invocation_verse}</i></rt>
                    </p>
                </div>
                <br>`);
            case "item":
                return(
                `<div class="item">
                    <table>
                        <tr>
                            <th colspan="6" class="title">
                                <div class="name">
                                    <ruby>名前<rt class="ruby">なまえ</rt></ruby>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th>使用資格</th>
                            <td colspan="5" class="requirements">なし</td>
                        </tr>
                        <tr>
                            <th>必要功績点</th>
                            <td class="cost">なし</td>
                            <th>個数</th>
                            <td class="quantity">1</td>
                            <th>所有形式</th>
                            <td class="ownership_type">貸与</td>
                        </tr>
                        <tr>
                            <th>効果</th>
                            <td colspan="5" class="effect">こうか</td>
                        </tr>
                        <tr>
                            <th>概説</th>
                            <td colspan="5" class="about">がいせつ</td>
                        </tr>
                        ${item_list[id].authority ? `<tr>
                            <th>出典</th>
                            <td colspan="5" class="authority">${item_list[id].authority}</td>
                        </tr>` : ''}
                    </table>
                </div>
                <br>`);
            case "goodys":
                return(
                `<div class="goodys">
                    <table>
                        <tr>
                            <th colspan="6" class="title">
                                <div class="name">
                                    <ruby>名前<rt class="ruby">なまえ</rt></ruby>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th>使用資格</th>
                            <td colspan="5" class="requirements">なし</td>
                        </tr>
                        <tr>
                            <th>必要功績点</th>
                            <td class="cost">なし</td>
                            <th>個数</th>
                            <td class="quantity">1</td>
                            <th>所有形式</th>
                            <td class="ownership_type">貸与</td>
                        </tr>
                        <tr>
                            <th>材料</th>
                            <td colspan="5" class="ingredients">ざいりょう</td>
                        </tr>
                        <tr>
                            <th>指定特技</th>
                            <td colspan="5" class="skill">していとくぎ</td>
                        </tr>
                        <tr>
                            <th>効果</th>
                            <td colspan="5" class="effect">こうか</td>
                        </tr>
                        <tr>
                            <th>概説</th>
                            <td colspan="5" class="about">がいせつ</td>
                        </tr>
                            ${goodys_list[id].authority ? `<tr>
                                <th>出典</th>
                                <td colspan="5" class="authority">${goodys_list[id].authority}</td>
                            </tr>` : ''}
                    </table>
                </div>
                <br>`);
            case "relic":
                return(
                `<div class="relic">
                    <table>
                        <tr>
                            <th colspan="6" class="title">
                                <div class="name">
                                    <ruby>名前<rt class="ruby">なまえ</rt></ruby>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th>収蔵先</th>
                            <td colspan="5" class="storage">しゅうぞうさき</td>
                        </tr>
                        <tr>
                            <th>使用資格</th>
                            <td colspan="5" class="requirements">なし</td>
                        </tr>
                        <tr>
                            <th>必要功績点</th>
                            <td class="cost">なし</td>
                            <th>個数</th>
                            <td class="quantity">1</td>
                            <th>所有形式</th>
                            <td class="ownership_type">貸与</td>
                        </tr>
                        <tr>
                            <th>欲求</th>
                            <td colspan="5" class="desire">よっきゅう</td>
                        </tr>
                        <tr>
                            <th>効果</th>
                            <td colspan="5" class="effect">こうか</td>
                        </tr>
                        <tr>
                            <th>概説</th>
                            <td colspan="5" class="about">がいせつ</td>
                        </tr>
                        ${relic_list[id].authority ? `<tr>
                            <th>出典</th>
                            <td colspan="5" class="authority">${relic_list[id].authority}</td>
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
                                    <ruby>${nosos_list[id].name}<rt class="ruby">${nosos_list[id].ruby}</rt></ruby>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th>患者</th>
                            <td class="patient">${nosos_list[id].patient}</td>
                            <th>強度</th>
                            <td class="strength">${nosos_list[id].strength}</td>
                        </tr>
                        <tr>
                            <th>前提</th>
                            <td colspan="3" class="prerequisite">${nosos_list[id].prerequisite}</td>
                        </tr>
                        <tr>
                            <th>処方箋</th>
                            <td colspan="3" class="prescription">${nosos_list[id].prescription}</td>
                        </tr>
                        <tr>
                            <th>指定特技</th>
                            <td colspan="3" class="skill">${nosos_list[id].skill}</td>
                        </tr>
                        <tr>
                            <th>発症</th>
                            <td colspan="3" class="onset">${nosos_list[id].onset}</td>
                        </tr>
                        <tr>
                            <th>症状</th>
                            <td colspan="3" class="effect">${nosos_list[id].effect}</td>
                        </tr>
                        <tr>
                            <th>概説</th>
                            <td colspan="3" class="about">${nosos_list[id].about}</td>
                        </tr>
                        ${nosos_list[id].authority ? `<tr>
                            <th>出典</th>
                            <td colspan="3" class="authority">${nosos_list[id].authority}</td>
                        </tr>` : ''}
                    </table>
                </div>
                <br>`);
            default:
                break;
        }
    }
}
