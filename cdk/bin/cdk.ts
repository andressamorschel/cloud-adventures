#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { S3BucketStack } from '../lib/cdk-stack';

const app = new cdk.App();
new S3BucketStack(app, 'S3BucketStack');
