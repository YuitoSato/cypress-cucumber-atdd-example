Feature: タスクを追加する

  Scenario: 正常にタスクを追加できる
    Given "/" に遷移している
    When 以下のようにフォームを入力する
      | selector   | value     | type  |
      | タスクフォーム/タイトル    | 家事        | input |
      | タスクフォーム/詳細       | キッチンを掃除する | input |
    And "タスク追加" をクリックする
    Then 以下のデータが "タスク一覧" リストの 1 番目に存在する
      | selector | value |
      | タスク一覧/タイトル  | 家事    |
      | タスク一覧/詳細  |  キッチンを掃除する |