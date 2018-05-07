import { HttpParams } from '@angular/common/http';

export class AppUtility {

    public static setHttpParams(obj: any) {
        return Object.getOwnPropertyNames(obj)
            .reduce((p, key) => p.set(key, obj[key]), new HttpParams());
    }

}
