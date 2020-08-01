import Welcome from './actions/welcome'
import ChoosenEnglish from './actions/choosen-english'
import ChoosenSpanish from './actions/choosen-spanish'
import NotFound from './actions/404'

import BotonicInfoEs from './actions/info-actions-es/botonic-info-es'
import HubtypeInfoEs from './actions/info-actions-es/hubtype-info-es'
import AuthorInfoEs from './actions/info-actions-es/author-info-es'
import HelpEs from './actions/info-actions-es/help-es'

import BotonicInfoEn from './actions/info-actions-en/botonic-info-en'
import HubtypeInfoEn from './actions/info-actions-en/hubtype-info-en'
import AuthorInfoEn from './actions/info-actions-en/author-info-en'
import HelpEn from './actions/info-actions-en/help-en'

export const routes = [
    { path: 'welcome', text: /hi|hello|hola/, action: Welcome },

    { path: 'chosen-english',payload:'english',action: ChoosenEnglish },
    { path: 'chosen-spanish', payload: 'spanish', action: ChoosenSpanish },

    { path: 'botonic-info-es', text: /botonic/, action: BotonicInfoEs },
    { path: 'hubtye-info-es', text: /hubtype/, action: HubtypeInfoEs },
    { path: 'author-info-es', text: /autora/, action: AuthorInfoEs },
    { path: 'help-es', text: /ayuda/, action: HelpEs },

    { path: 'botonic-info-en', text: /framework/, action: BotonicInfoEn },
    { path: 'hubtye-info-en', text: /company/, action: HubtypeInfoEn },
    { path: 'author-info-en', text: /author/, action: AuthorInfoEn },
    { path: 'help-en', text: /help/, action: HelpEn },

    { path: 'not-found', type: /.*/, action: NotFound }
]