# url: http://www.example.com?name=Adrian&module=COM661&weeks=12

url_to_parse = input("Enter url: ")
host = url_to_parse.split("?")[0]
query_params = url_to_parse.split("?")[1]
query_params = query_params.split("&")

print(f"Host: {host}")

for qp in query_params:
    qp = qp.split("=")
    print(f"Name is {qp[0]}, value is {qp[1]}")
