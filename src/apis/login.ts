import {fetch} from '../util/fetch';
import {loginModel} from '../model/login';

export function getRouteDetail() {
    return fetch.post(`/pe/sim/pro/v1/user/login`, {
        wrapper: loginModel
    });
}
