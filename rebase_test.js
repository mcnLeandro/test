// rebaseのテスト

// テスト1 ブランチ数: 2, pull回数: 1, edit: false
// 0. rebase_test1_core: mainから作成
// 0. rebase_test1_front: mainから作成
// 1. rebase_test1_core: add commit push(coreの作業として)
// 2. rebase_test1_front: add commit push(frontの作業として)
// 3. rebase_test1_front: coreをpullしてpush
// 4. rebase_test1_core: mainにマージ
// 5. rebase_test1_front: mainをpull --rebaseしてpush
// 期待: 2番目のコミットのみが差分になってほしい

const test1 = () => {

}

// テスト2 ブランチ数: 2, pull回数: 2, edit: false
// 0. rebase_test2_core: mainから作成
// 0. rebase_test2_front: mainから作成
// (
//  1. rebase_test1_core: add commit push(coreの作業として)
//  2. rebase_test1_front: add commit push(frontの作業として)
//  3. rebase_test1_front: coreをpull push
// ) x 2
// 4. rebase_test1_core: mainにマージ
// 5. rebase_test1_front: mainをpull --rebaseしてpush
// 期待: 1-2番目のコミットのみが差分になってほしい

const test2 = () => {

}


// テスト3 ブランチ数: 3, pull回数: 2, edit: false
// 0. rebase_test3_core: mainから作成
// 0. rebase_test3_core2: mainから作成
// 0. rebase_test3_front: mainから作成
// 1. rebase_test3_core: add commit push(coreの作業として)
// 2. rebase_test3_core2: add commit push(core2の作業として)
// 3. rebase_test3_front: add commit push(frontの作業として)
// 4. rebase_test3_front: core pull push
// 5. rebase_test3_core: main マージ
// 5. rebase_test3_core2: main マージ
// 6. rebase_test3_front: main pull --rebase push
// 期待: 3番目のコミットのみが差分になってほしい
const test3 = () => {

}

// テスト4　ブランチ数: 2, pull回数: 2, edit: true
// 0. rebase_test4_core: mainから作成
// 0. rebase_test4_front: mainから作成
// 1. rebase_test4_core: add commit push(coreの作業として)
// 2. rebase_test4_front: add commit push(frontの作業として)
// 3. rebase_test4_front: coreをpullしてpush
// 4. rebase_test4_core: commitを書き換えて-f push
// 5. rebase_test4_front: coreをpullしてpush
// 6. rebase_test4_core: mainにマージ
// 7. rebase_test4_front: mainをpull --rebaseしてpush
// 期待: 2番目のコミットのみが差分になってほしい

const test4 = () => {

}

// テスト5(test4が成功した時のみ)　ブランチ数: 2, pull回数: 4, edit: true

const test5 = () => {

}

// テスト6(test4が成功した時のみ) ブランチ数: 3, pull回数: 4, edit: true

const test6 = () => {

}