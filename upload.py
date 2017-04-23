from argparse import ArgumentParser
import os

parser = ArgumentParser()
parser.add_argument('-u', '--username')
parser.add_argument('-p', '--password')
parser.add_argument('-r', '--host')
parser.add_argument('-d', '--directory')
args = parser.parse_args()

result = [os.path.normpath(os.path.relpath(os.path.join(dp, f), args.directory)) for dp, dn, filenames in os.walk(args.directory) for f in filenames]

for f in result:
    path, file = os.path.split(f.replace('\\', '/'))
    os.system(f"curl -T {os.path.join(args.directory, f)} -u {args.username}:{args.password} ftp://{args.host}/public_html/{path}/{file} --ftp-create-dirs")
    # print(f"curl -T {os.path.join(args.directory, f)} -u {args.username}:{args.password} ftp://{args.host}/public_html/{path}")