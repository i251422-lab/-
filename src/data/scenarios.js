export const SCENARIOS = {
    opening: {
        id: 'opening',
        text: '大学3年の春。新しい学期が始まった。今年はどんな一年になるだろうか...',
        background: '/assets/bg/university_gate.png',
        next: 'meet_friend1'
    },
    meet_friend1: {
        id: 'meet_friend1',
        character: 'friend1',
        expression: 'smile',
        text: 'あ！遅いよ〜！もう講義始まっちゃうって！',
        background: '/assets/bg/campus.png',
        choices: [
            { text: 'ごめんごめん、寝坊した', next: 'class_scene', affection: { friend1: 2 } },
            { text: '急いで来たんだよ', next: 'class_scene', affection: { friend1: 1 } },
            { text: 'うるさいなぁ', next: 'class_scene', affection: { friend1: -1 } }
        ]
    },
    class_scene: {
        id: 'class_scene',
        text: 'なんとか講義には間に合った。隣の席を見ると...',
        background: '/assets/bg/classroom.png',
        choices: [
            { text: '大青の隣に座る', next: 'lunch_break', affection: { friend1: 3 } },
            { text: '琢己先輩の近くに座る', next: 'lunch_break', affection: { friend2: 3 } },
            { text: '一番後ろで寝る', next: 'lunch_break', affection: {} }
        ]
    },
    lunch_break: {
        id: 'lunch_break',
        text: '昼休み。食堂は混んでいるようだ。',
        background: '/assets/bg/cafeteria.png',
        choices: [
            { text: '大青を誘う', next: 'forgotten_wallet', affection: { friend1: 5 } },
            { text: '琢己先輩と話す', next: 'forgotten_wallet', affection: { friend2: 5 } },
            { text: '一人で食べる', next: 'forgotten_wallet', affection: {} }
        ]
    },
    // Negative Event 1
    forgotten_wallet: {
        id: 'forgotten_wallet',
        text: '会計の時、財布がないことに気づいた！どうしよう...',
        background: '/assets/bg/cafeteria.png',
        choices: [
            { text: '大青、金貸して！', next: 'afternoon_class', affection: { friend1: -3 } },
            { text: '先輩、奢ってくださいよ', next: 'afternoon_class', affection: { friend2: -2 } },
            { text: '陸斗、立て替えて！', next: 'afternoon_class', affection: { friend3: -3 } }
        ]
    },
    afternoon_class: {
        id: 'afternoon_class',
        text: '午後の講義も終わり、放課後になった。',
        background: '/assets/bg/campus_evening.png',
        choices: [
            { text: 'サークルに行く', next: 'circle_activity', affection: { friend1: 3 } },
            { text: 'バイトに行く', next: 'part_time_job', affection: { friend3: 3 } },
            { text: '図書館で勉強', next: 'library_study', affection: { friend2: 2 } }
        ]
    },
    circle_activity: {
        id: 'circle_activity',
        character: 'friend1',
        text: 'サークル棟に行くと、大青がテニスの素振りをしていた。「あ、来てくれたんだ！」',
        background: '/assets/bg/court.png',
        choices: [
            { text: '一緒に練習する', next: 'weekend_plan', affection: { friend1: 4 } },
            { text: '応援する', next: 'weekend_plan', affection: { friend1: 2 } },
            { text: '冷やかす', next: 'weekend_plan', affection: { friend1: -1 } }
        ]
    },
    part_time_job: {
        id: 'part_time_job',
        character: 'friend3',
        text: '「遅い！シフト入ってるなら早く着替えて！」と陸斗に叱られた。でも顔は少し嬉しそうだ。',
        background: '/assets/bg/cafe_kitchen.png',
        choices: [
            { text: '真面目に働く', next: 'weekend_plan', affection: { friend3: 4 } },
            { text: '陸斗と無駄話する', next: 'weekend_plan', affection: { friend3: 2 } },
            { text: 'つまみ食いする', next: 'weekend_plan', affection: { friend3: -2 } }
        ]
    },
    library_study: {
        id: 'library_study',
        character: 'friend2',
        text: '図書館の静かな席で琢己先輩が本を読んでいた。',
        background: '/assets/bg/library.png',
        choices: [
            { text: '隣で勉強する', next: 'weekend_plan', affection: { friend2: 4 } },
            { text: 'おすすめの本を聞く', next: 'weekend_plan', affection: { friend2: 3 } },
            { text: '寝る', next: 'weekend_plan', affection: { friend2: -1 } }
        ]
    },
    weekend_plan: {
        id: 'weekend_plan',
        text: '週末が近づいてきた。誰かを誘ってみようか？',
        background: '/assets/bg/room.png',
        choices: [
            { text: '大青を映画に誘う', next: 'movie_date', affection: { friend1: 5 } },
            { text: '琢己先輩をカフェに誘う', next: 'cafe_date', affection: { friend2: 5 } },
            { text: '陸斗をカラオケに誘う', next: 'karaoke_date', affection: { friend3: 5 } }
        ]
    },
    movie_date: {
        id: 'movie_date',
        character: 'friend1',
        text: '大青と映画館に来た。話題のアクション映画だ。',
        background: '/assets/bg/cinema.png',
        choices: [
            { text: 'ポップコーンを買う', next: 'study_session', affection: { friend1: 2 } },
            { text: '手を繋ぐ...？', next: 'study_session', affection: { friend1: 5 } },
            { text: '寝てしまった', next: 'study_session', affection: { friend1: -3 } }
        ]
    },
    cafe_date: {
        id: 'cafe_date',
        character: 'friend2',
        text: 'おしゃれなカフェ。琢己先輩は詳しそうだ。',
        background: '/assets/bg/cafe.png',
        choices: [
            { text: 'ブラックコーヒーを頼む', next: 'study_session', affection: { friend2: 3 } },
            { text: '甘いケーキをシェアする', next: 'study_session', affection: { friend2: 5 } },
            { text: '水を頼む', next: 'study_session', affection: { friend2: 0 } }
        ]
    },
    karaoke_date: {
        id: 'karaoke_date',
        character: 'friend3',
        text: '陸斗とカラオケ。彼はマイクを離さない。',
        background: '/assets/bg/karaoke.png',
        choices: [
            { text: 'デュエットする', next: 'study_session', affection: { friend3: 5 } },
            { text: '詳しくない曲を入れる', next: 'study_session', affection: { friend3: 1 } },
            { text: 'ひたすらタンバリン', next: 'study_session', affection: { friend3: 3 } }
        ]
    },
    study_session: {
        id: 'study_session',
        text: '定期試験が近づいてきた。みんなで勉強会をすることになった。',
        background: '/assets/bg/classroom.png',
        choices: [
            { text: '大青に教える', next: 'exam_result', affection: { friend1: 3 } },
            { text: '琢己先輩に教わる', next: 'exam_result', affection: { friend2: 3 } },
            { text: '陸斗とノートを見せ合う', next: 'exam_result', affection: { friend3: 3 } }
        ]
    },
    // Negative Event 2
    exam_result: {
        id: 'exam_result',
        text: '試験の結果が返ってきた...赤点だ。',
        background: '/assets/bg/classroom_messy.png',
        choices: [
            { text: '大青のせいにする', next: 'festival_prep', affection: { friend1: -5 } },
            { text: '先輩に八つ当たり', next: 'festival_prep', affection: { friend2: -4 } },
            { text: '陸斗に泣きつく', next: 'festival_prep', affection: { friend3: -2 } }
        ]
    },
    festival_prep: {
        id: 'festival_prep',
        text: '学園祭の準備期間。クラスの出し物はカフェに決まった。',
        background: '/assets/bg/classroom_messy.png',
        choices: [
            { text: '看板作り担当（大青と）', next: 'lunch_event_check', affection: { friend1: 3 } },
            { text: '会計担当（琢己先輩と）', next: 'lunch_event_check', affection: { friend2: 3 } },
            { text: '接客練習（陸斗と）', next: 'lunch_event_check', affection: { friend3: 3 } }
        ]
    },
    // Dynamic Branch Point
    lunch_event_check: {
        id: 'lunch_event_check',
        text: '...',
        next: 'CALCULATE_BRANCH',
        branches: {
            friend1: 'lunch_friend1',
            friend2: 'lunch_friend2',
            friend3: 'lunch_friend3'
        }
    },
    // Individual Branch Scenes
    lunch_friend1: {
        id: 'lunch_friend1',
        character: 'friend1',
        expression: 'smile',
        text: '「ねえ、お昼一緒に食べようよ！」大青がニコニコしながら近づいてきた。',
        background: '/assets/bg/cafeteria.png',
        next: 'festival_mishap'
    },
    lunch_friend2: {
        id: 'lunch_friend2',
        character: 'friend2',
        expression: 'smile',
        text: '「もし良ければ、一緒に昼食でもどうかな？」琢己先輩に誘われた。',
        background: '/assets/bg/cafeteria.png',
        next: 'festival_mishap'
    },
    lunch_friend3: {
        id: 'lunch_friend3',
        character: 'friend3',
        expression: 'smile',
        text: '「おい、飯行くぞ。付き合えよ。」陸斗に強引に連れて行かれた。',
        background: '/assets/bg/cafeteria.png',
        next: 'festival_mishap'
    },
    // Negative Event 3
    festival_mishap: {
        id: 'festival_mishap',
        text: '準備していた看板が壊れてしまった！誰かのミスらしい...',
        background: '/assets/bg/classroom_messy.png',
        choices: [
            { text: '犯人を探して責める', next: 'career_talk', affection: { friend1: -2, friend2: -2, friend3: -2 } },
            { text: 'イライラして帰る', next: 'career_talk', affection: { friend1: -3, friend2: -3, friend3: -3 } },
            { text: '機嫌が悪くなる', next: 'career_talk', affection: { friend1: -1, friend2: -1, friend3: -1 } }
        ]
    },
    career_talk: {
        id: 'career_talk',
        text: '就活の時期。進路について悩んでいる...',
        background: '/assets/bg/park_evening.png',
        choices: [
            { text: '夢を追いかけたい', next: 'final_event', affection: { friend1: 2 } },
            { text: '堅実に生きたい', next: 'final_event', affection: { friend2: 2 } },
            { text: '稼ぎたい', next: 'final_event', affection: { friend3: 2 } }
        ]
    },
    final_event: {
        id: 'final_event',
        text: '卒業式の日。誰に想いを伝える？',
        background: '/assets/bg/university_gate_evening.png',
        choices: [
            { text: '大青、ずっと好きだった！', next: 'ending_check_friend1', affection: {} },
            { text: '琢己先輩、付き合ってください！', next: 'ending_check_friend2', affection: {} },
            { text: '陸斗、俺と付き合ってくれ！', next: 'ending_check_friend3', affection: {} },
            { text: '誰にも伝えない', next: 'ending_solo', affection: {} }
        ]
    },
    ending_check_friend1: {
        id: 'ending_check_friend1',
        text: '心臓の音がうるさい...',
        target: 'friend1',
        next: 'CALCULATE_SPECIFIC_ENDING'
    },
    ending_check_friend2: {
        id: 'ending_check_friend2',
        text: '先輩はなんて言うだろう...',
        target: 'friend2',
        next: 'CALCULATE_SPECIFIC_ENDING'
    },
    ending_check_friend3: {
        id: 'ending_check_friend3',
        text: '笑われないかな...',
        target: 'friend3',
        next: 'CALCULATE_SPECIFIC_ENDING'
    },
    ending_success_friend1: {
        id: 'ending_success_friend1',
        character: 'friend1',
        expression: 'blush',
        text: '「僕も...ずっと待ってたよ！」二人は結ばれた。（大青エンド）',
        background: '/assets/bg/ending_friend1.png',
    },
    ending_success_friend2: {
        id: 'ending_success_friend2',
        character: 'friend2',
        expression: 'blush',
        text: '「僕も同じ気持ちだ。これからよろしく。」（琢己先輩エンド）',
        background: '/assets/bg/ending_friend2.png',
    },
    ending_success_friend3: {
        id: 'ending_success_friend3',
        character: 'friend3',
        expression: 'blush',
        text: '「バーカ、遅いんだよ...嬉しいけど。」（陸斗エンド）',
        background: '/assets/bg/ending_friend3.png',
    },
    // Fail Scenes
    ending_fail_friend1: {
        id: 'ending_fail_friend1',
        character: 'friend1',
        expression: 'sad',
        text: '「ごめん、友達としてしか見られない...」想いは届かなかった。（バッドエンド）',
        background: '/assets/bg/rainy.png',
    },
    ending_fail_friend2: {
        id: 'ending_fail_friend2',
        character: 'friend2',
        expression: 'sad',
        text: '「すまない。君のことは妹のように思っていた。」（バッドエンド）',
        background: '/assets/bg/rainy.png',
    },
    ending_fail_friend3: {
        id: 'ending_fail_friend3',
        character: 'friend3',
        expression: 'sad',
        text: '「わりぃ。そういう対象として見たことねえわ。」（バッドエンド）',
        background: '/assets/bg/rainy.png',
    },
    ending_fail: { // Fallback
        id: 'ending_fail',
        text: '「ごめん...」うまくいかなかった。',
        background: '/assets/bg/rainy.png',
    },
    ending_solo: {
        id: 'ending_solo',
        text: '誰とも付き合わず、自分の道を歩むことにした。（自立エンド）',
        background: '/assets/bg/sky.png',
    }
};
