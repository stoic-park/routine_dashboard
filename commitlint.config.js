module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 새로운 기능
        'fix', // 버그 수정
        'docs', // 문서 수정
        'style', // 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
        'refactor', // 코드 리팩토링
        'test', // 테스트 코드
        'chore', // 빌드 업무 수정, 패키지 매니저 수정
        'design', // CSS 등 사용자 UI 디자인 변경
        'comment', // 필요한 주석 추가 및 변경
        'rename', // 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
        'remove', // 파일을 삭제하는 작업만 수행한 경우
        '!BREAKING CHANGE', // 커다란 API 변경의 경우
        '!HOTFIX', // 급하게 치명적인 버그를 고쳐야 하는 경우
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-max-length': [2, 'always', 50],
  },
};
