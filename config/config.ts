const config = {
  // bot settings
  bot_token: '1767775289:AAGGcvI8osGU30A8MOzEEantvYu-5FLPC34', // support bot token
  staffchat_id: '-421864931', // eg. -123456789
  owner_id: '501729072',
  spam_time: 5 * 60 * 1000, // time (in MS) in which user may send 5 messages
  allow_private: Allow , // Allow / disallow option for staff to chat privately
  auto_close_tickets: true,
  direct_reply: false,

  
  language: {ru}
    startCommandText: 'Добро пожаловать в наш чат поддержки! Задайте свой вопрос',
    faqCommandText: 'Get this bot at: <a href=\'https://github.com/bostrot/telegram-support-bot\'>github.com</a>',
    helpCommandText: '<b>Доступные команды:</b>\n/help\n/faq\n/id',
    contactMessage: 'Благодарю Вас за обращение. Мы Вам ответим как можно скорее.',
    blockedSpam: 'Вы отправили довольно много вопросов за последнее время. Пожалуйста, успокойтесь и подождите, пока персонал их рассмотрит.',
    ticket: 'Тикет',
    closed: 'Закрыта',
    acceptedBy: 'Был принят',
    dear: 'дорогой',
    regards: 'С наилучшими пожеланиями,',
    from: 'от',
    language: 'Язык',
    msg_sent: 'Сообщение отправлено пользователю',
    usr_with_ticket: 'Пользователь с билетом',
    banned: 'забанен',
    replyPrivate: 'Ответить в приват',
    services: 'Выберите услугу из списка ниже',
    customer: 'клиент',
    msgForwarding: 'Ваши сообщения теперь будут пересылаться поставщикам группы: ',
    back: 'Вернуться',
    whatSubCategory: 'Какая подкатегория лучше всего описывает ваши потребности?',
    prvChatEnded: 'Приватный чат завершен.',
    prvChatOpened: 'Открыт приватный чат с клиентом',
    prvChatEnd: 'Завершить приватный чат',
    prvChatOpenedCustomer: 'Открытый приватный чат',
    instructionsSent: 'Инструкции были отправлены вам в приватном чате.',
    openTickets: 'Открытые билеты',
    support: 'Поддержка',
    prvChatOnly: 'Эту команду можно использовать только в приватном чате.',
    ticketClosed: 'Ваш билет был закрыт нашими сотрудниками. Вы можете открыть новый билет в любое время.',
    links: 'Прямые ссылки поддержки',
    textFirst: 'Пожалуйста, отправьте нам сообщение перед отправкой изображения, чтобы мы могли помочь вам лучше.',
  },

  categories: [],
  categories:
    [
      {
        name: 'Category1', subgroups: [
          {name: 'Помощь с визитами', group_id: '-319129977'},
         ],
      },
      {
        name: 'Category2', subgroups: [
          {name: 'Техническая поддержка', group_id: '-421864931'},
       ],
      },
      {
        name: 'Категория контактов без подкатегорий', group_id: '-12345678910'
      },
      {
        name: 'Admin Chat', group_id: '-12345678910' 
      },
      {
        name: 'Contact', msg: 'Посетите наш веб-сайт'
      },
    ],
};

export default config;
  
