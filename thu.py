#!/usr/bin/env python
# -*- coding: utf-8 -*-
import timeit
start = timeit.default_timer()
import aes
def string_to_hex(input_string):
    # Khởi tạo một chuỗi rỗng để lưu kết quả
    hex_string = ""

    # Duyệt qua từng ký tự trong chuỗi đầu vào
    for char in input_string:
        # Chuyển đổi ký tự thành giá trị hexa và thêm vào chuỗi kết quả
        hex_string += format(ord(char), '02x')

    return hex_string

def hex_to_string(input_hex):
    # Khởi tạo một chuỗi rỗng để lưu kết quả
    string = ""

    # Duyệt qua từng cặp ký tự hexa trong chuỗi đầu vào
    for i in range(0, len(input_hex), 2):
        # Chuyển đổi cặp ký tự hexa thành ký tự và thêm vào chuỗi kết quả
        string += chr(int(input_hex[i:i + 2], 16))

    return string
key = 'okiujhytghjnjmko'
key = string_to_hex(key)
key = bytes.fromhex(key)

a = 'hello world'
a = string_to_hex(a)
inp = bytes.fromhex(a)
print(inp)
# inp = bytes.fromhex(a) # chuyển hex string to bytes, .hex() : chuyển bytes to hex()

encrypted = aes.AES(key).encrypt(inp)

print('encrypt: ',encrypted.hex())
# print(bytearray.fromhex(encrypted.hex()).decode('utf16'))

print('decrypt: ',aes.AES(key).decrypt(encrypted).decode('utf-8'))

stop = timeit.default_timer()
print('Time: ', stop - start)
