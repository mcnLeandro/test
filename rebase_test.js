// NOTE: rebaseのテスト

// テスト1
// 0. rebase_test1_core: mainから作成
// 0. rebase_test1_front: mainから作成
// 1. rebase_test1_core: commit追加してpush(coreの作業として)
// 2. rebase_test1_front: coreをpullしてpush
// 3. rebase_test1_front: commitを追加してpush(frontの作業として)
// 4. rebase_test1_core: mainにマージ
// 5. rebase_test1_front: mainをpull --rebaseしてpush
// ここでrebase_test1_frontのPRがどうなっているか確認
// 期待: 3番目のコミットのみが差分になってほしい

const work1 = () => {

}

// テスト2
// 0. rebase_test1_core: mainから作成
// 0. rebase_test1_front: mainから作成
// 1. rebase_test2_core: commit追加してpush(coreの作業として)
// 2. rebase_test2_front: coreをpullしてpush
// 3. rebase_test2_core: commitを書き換えて-f push
// 4. rebase_test2_front: coreをpullしてpush
// 5. rebase_test2_front: commitを追加してpush(frontの作業として)
// 6. rebase_test2_core: mainにマージ
// 7. rebase_test2_front: mainをpull --rebaseしてpush
// ここでrebase_test2_frontのPRがどうなっているか確認
// 期待: 5番目のコミットのみが差分になってほしい

const work2 = () => {

}


// テスト3

const work3 = () => {

}