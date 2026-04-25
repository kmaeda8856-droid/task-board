# Task Board

## プロジェクト概要

React + TypeScript + Vite で構築したタスクボードアプリケーション。

## 技術スタック

- React 18
- TypeScript
- Vite

## 開発コマンド

```bash
npm install       # 依存パッケージのインストール
npm run dev       # 開発サーバー起動 (http://localhost:5173)
npm run build     # プロダクションビルド
npm run preview   # ビルド結果のプレビュー
```

## Git 運用ルール

### 基本方針

**コードを変更するたびに、必ず GitHub へプッシュすること。**

### 手順

1. 変更をステージング・コミットする
2. `git push` で GitHub にプッシュする

```bash
git add <変更ファイル>
git commit -m "変更内容の説明"
git push
```

### コミットメッセージ

- 変更の「なぜ」を中心に書く
- 日本語・英語どちらでも可
- フォーマット例: `feat: タスク追加機能を実装`、`fix: 削除時のバグを修正`

### ブランチ戦略

- `main`: 本番用ブランチ
- 機能追加・修正はフィーチャーブランチで作業し、PR を通じて `main` にマージする

### プッシュのタイミング

- 1つの機能・修正が完成したとき
- 作業を中断するとき
- 会話・セッションを終了するとき

## 開発環境

- OS: Windows 11
- Shell: Bash (Unix syntax)
