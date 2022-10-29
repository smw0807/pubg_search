import { PubgAPI } from '.';
import { AxiosPromise } from 'axios';
import { ISeasonList } from '../interfaces';

export class SeasonAPI extends PubgAPI {
  public _platform;
  constructor(platform: string) {
    super();
    this._platform = platform;
  }
  //시즌 아이디들
  get getSeasons(): AxiosPromise<ISeasonList> {
    return this.axios(`/${this._platform}/seasons`);
  }
  //현재 시즌 아이디
  async getNowSeasonID() {
    try {
      const rs = await this.axios(`/${this._platform}/seasons`);
      return rs.data.data[rs.data.data.length - 1].id;
    } catch (err) {
      console.error(err);
      return new Error('시즌 정보 가져오기 실패');
    }
  }
}
