var translator = {
  translate: function (key) {
    var translation = translator.languages[config.data.language][key]
    return translation
  },

  translate_ui: function () {
    var elements_to_translate = document.querySelectorAll('[data-translator-key]')

    for (element of elements_to_translate) {
      element.innerText = translator.translate(element.getAttribute('data-translator-key'))
    }
  },

  languages: {
    en: {
      timetable: 'Timetable',
      settings: 'Settings',
      'language: ': 'Language:',
      save: 'Save',
      general: 'General',
      backup: 'Backup',
      restore: 'Restore',
      reset: 'Reset',
      colors: 'Colors',
      periods: 'Periods',
      add: 'Add',
      data_saved: 'Your application data was successfully saved.',
      reset_confirm:
        "Are you sure to reset all data? If you haven't made a backup, all application data will be lost forever.",
    },

    ua: {
      timetable: 'Розклад',
      settings: 'Налаштування',
      'language: ': 'Мова:',
      save: 'Зберегти',
      general: 'Загальні',
      backup: 'Резервне копіювання',
      restore: 'Відновити',
      reset: 'Скинути',
      colors: 'Кольори',
      periods: 'Тривалість пар',
      add: 'Додати',
      data_saved: 'Ваші дані додатку успішно збережені.',
      reset_confirm:
        'Ви впевнені, що хочете скинути всі дані? Якщо ви не зробили резервну копію, всі дані додатку буде втрачено назавжди.',
    },
  },
}
