import Welcome from './actions/welcome'
import ChoosenEnglish from './actions/choosen-english'
import ChoosenSpanish from './actions/choosen-spanish'
import NotFound from './actions/404'
import BotonicInfoEs from './actions/botonic-info-es'

export const routes = [
    { path: 'welcome', text: /hi|hello|hola/, action: Welcome },
    { path: 'chosen-english',payload:'english',action: ChoosenEnglish },
    { path: 'chosen-spanish', payload: 'spanish', action: ChoosenSpanish },
    { path: 'botonic-info-es', text: /botonic/, action: BotonicInfoEs },
    { path: 'not-found', type: /.*/, action: NotFound }
]