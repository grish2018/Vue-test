import currentConversation from './currentConversation'

export default {
    actions: {
        setCurrentConversation({ commit, state }, id) {
            state.loaderIsActive = true
            setTimeout(() => {
                const { conversationList } = state;
                const newCurrent = conversationList.find(conv => conv.id === Number(id))
                commit('setConversation', newCurrent)
                state.loaderIsActive = false
            }, 1000)

        }
    },
    mutations: {
        setConversation(state, data) {
            state.currentConversation = data
        },
        setNewMessage(state, newMessage) {
            state.loaderIsActive = true
            setTimeout(() => {
                const { id } = state.currentConversation;
                const { parts } = state.currentConversation;
                const newParts = [...parts, newMessage];

                state.currentConversation.parts = newParts
                state.conversationList = state.conversationList.map((item) => item.id === id ? state.currentConversation : item)
                state.loaderIsActive = false
            }, 500)
        }

    },
    state: {
        loaderIsActive: false,
        currentConversation,
        conversationList: [
            {
                id: 1,
                subject: 'Простой запрос',
                created: '2019-08-01 23:59',
                parts: [
                    {
                        id: 1,
                        userId: 1,
                        author: 'vasya',
                        text: 'Привет, как дела?',
                        created: '2019-08-01 23:59',
                    },
                    {
                        id: 2,
                        userId: 2,
                        author: 'petya',
                        created: '2019-08-02 01:20',
                        text: 'Привет, все хорошо, спасибо!',
                    },
                    {
                        id: 3,
                        userId: 2,
                        author: 'petya',
                        created: '2019-08-02 05:20',
                        text: 'А у тебя?',
                    },
                ],
            },
            {
                id: 2,
                subject: 'Вопрос по домену',
                created: '2016-03-02 14:19',
                parts: [
                    {
                        id: 1,
                        userId: 1,
                        author: 'petr',
                        created: '2019-08-06 12:20',
                        text: 'Здравствуйте, тут есть кто-нибудь?',
                    },
                    {
                        id: 2,
                        userId: 2,
                        author: 'vasiliy',
                        created: '2019-08-06 12:34',
                        text: 'Да, я вас слушаю!',
                    },
                    {
                        id: 3,
                        userId: 1,
                        author: 'petr',
                        created: '2019-08-06 12:38',
                        text: 'Помогите мне настроить домен!',
                    },
                ],
            },
        ]
    },
    getters: {
        allConversations(state) {
            return state.conversationList
        },
        currentConversation(state) {
            return state.currentConversation
        },
        loaderIsActive(state) {
            return state.loaderIsActive
        }
    },
}