import {
  Injectable
} from '@nestjs/common';

@Injectable()
export class TuysfService {
  constructor() {}

  async executeDeploy(phone: string) {
    var cp = require('child_process');
    cp.exec('/root/b.sh', function(err, stdout, stderr) {
      console.log('err', err);
      console.log('stdout', stdout);
      console.log('stderr', stderr);
    });
    return true
  }
}
