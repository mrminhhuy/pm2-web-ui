import {
  Injectable
} from '@nestjs/common';

@Injectable()
export class TuysfService {
  constructor() {}

  async executeDeploy(platform: string) {
    var cp = require('child_process');
    if (!platform) {
      return {
        message: 'Kiểm tra platform'
      }
    }
    let path = '';
    switch (platform) {
      case 'web':
        path = '/root/w.sh';
        break;
      case 'api':
        path = '/root/b.sh';
        break;
    }
    cp.exec(path, function(err, stdout, stderr) {
      console.log('err', err);
      console.log('stdout', stdout);
      console.log('stderr', stderr);
    });
    return {
      message: 'Đang thực thi. Kiểm tra lại sau 5 phút'
    }
  }
}
