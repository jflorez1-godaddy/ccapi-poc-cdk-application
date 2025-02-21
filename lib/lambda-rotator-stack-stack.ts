import { Construct } from 'constructs';
import { LambdaRotator } from 'lambda-rotator-construct';
import { GDStack, GDStackProps } from '@gd-safeguard/godaddy-constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class LambdaRotatorStackTest extends GDStack {
  constructor(scope: Construct, id: string, props: GDStackProps) {
    super(scope, id, props);

    new LambdaRotator(this, 'LambdaRotator', {
      accountId: "456389336637",
      privateDxSubnetsSSMParam: "/AdminParams/VPC/DxAppSubnets/All",
      vpc: this.gdTrustedLandingZone.networking.vpc,
      gdTrustedLandingZone: this.gdTrustedLandingZone,
      redisClusterName: "test-clustered",
      region: "us-west-2",
    });
  }
}
