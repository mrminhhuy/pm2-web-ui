import {
  Injectable
} from '@nestjs/common';

@Injectable()
export class TuysfService {
  constructor() {}

  async executeDeploy(query: any) {
    var cp = require('child_process');
    if (!query?.platform) {
      return {
        message: 'Kiểm tra platform'
      }
    }
    console.log('platform', query?.platform)
    let path = '';
    switch (query?.platform) {
      case 'web':
        path = '/root/w.sh';
        break;
      case 'api':
        path = '/root/b.sh';
        break;
    }
    try {
      cp.exec(path, function(err, stdout, stderr) {
        console.log('err', err);
        console.log('stdout', stdout);
        console.log('stderr', stderr);
      });
    } catch (err) {
      return {
        message: err
      }
    }
    return {
      message: 'Đang thực thi. Kiểm tra lại sau 5 phút'
    }
  }
}
