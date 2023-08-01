import {
  Injectable
} from '@nestjs/common';

@Injectable()
export class TuysfService {
  constructor() {}

  async executeDeploy(query: any) {
    var cp = require('child_process');
    var fs = require('fs');
    fs.unlink('/root/.pm2/pm2.log', function (err) {
      if (err) throw err;
      console.log('File deleted!');
    });
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
      message: 'Đang thực thi. Kiểm tra lại sau 5 phút. Xem thông tin trạng thái tại đây https://ttttykhoa-staging.e-plus.vn/trd/deploy/check'
    }
  }

  async checkLog() {
    var res = ''
    const fs = require('fs');
    res = await fs.readFileSync('/root/.pm2/pm2.log', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      return data;
    });
    return res;
  }
}
