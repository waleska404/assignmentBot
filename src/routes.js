import Welcome from './actions/welcome'
import ChoosenEnglish from './actions/choosen-english'
import ChoosenSpanish from './actions/choosen-spanish'
import NotFound from './actions/404'
import BotonicInfoEs from './actions/botonic-info-es'
import HubtypeInfoEs from './actions/hubtype-info-es'
import AuthorInfoEs from './actions/author-info-es'
import HelpEs from './actions/help-es'

export const routes = [
    { path: 'welcome', text: /hi|hello|hola/, action: Welcome },
    { path: 'chosen-english',payload:'english',action: ChoosenEnglish },
    { path: 'chosen-spanish', payload: 'spanish', action: ChoosenSpanish },
    { path: 'botonic-info-es', text: /botonic/, action: BotonicInfoEs },
    { path: 'hubtye-info-es', text: /hubtype/, action: HubtypeInfoEs },
    { path: 'author-info-es', text: /autora/, action: AuthorInfoEs },
    { path: 'help-es', text: /ayuda/, action: HelpEs },
    { path: 'not-found', type: /.*/, action: NotFound }
]