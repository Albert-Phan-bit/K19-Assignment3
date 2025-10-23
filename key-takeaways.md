GIT
#Git commands to undo actions
    ##git commit --amend -m "<message>" : sửa commit message gần đây nhất

    ##git restore --staged <file> : restore 1 file ra khỏi staging area 

    ##git reset HEAD~1 : revert về 1 commit trước đó

#Git - Branching
    ##git pull origin main: pull code từ main branch(branch chính) về

    ##Branch là các phiên bản được tạo ra từ bản gốc để tránh ảnh hưởng tới main branch

    ##git branch: xem danh sách cái nhánh đang có

    ##git branch <branch_name>: tạo 1 branch mới

    ##git checkout <branch_name>: chuyển sang 1 branch mới

    ##git checkout -b <branch_name>: tạo và chuyển sang 1 branch mới

    ##git branch -d <branch_name>: xóa 1 branch (đứng ở branch khác trước khi xóa)

    ##luôn pull code từ main branch về trước khi tạo branch mới

#Git - Ignore file
    ##File .ignore: ignore các file có file name trong .ignore

    ##Cú pháp của file .ignore:
        ###Ignore 1 file cụ thể: <file_name>.txt

        ###Ignore tất cả file có đuôi cụ thể: *.txt or *.log

        ###Ignore thư mục: d/ or lesson-03/

        ###Không Ignore 1 file cụ thể: !<file_name>.txt

        ###Ignore file trong mọi thư mục con: **/*.tmp

JAVA
#Convention: format or quy định để code có 1 format chung 
 Các loại convention:
    Tên file
    Tên biến
    Tên commit
    ...

    ##snake_case: tạm thời ko dùng
    ##kebab-case: đặt tên file và folder
    ##camelCase: đặt tên biến và hàm
    ##PascalCase: đặt tên class

#Console log advance

#Object: lưu trữ dữ liệu dạng key-value
Ex:
    obj = {
        x : 5,
        y : 6,
    };

#Logical operator
    &&: cả 2 dk đều đúng (AND)
    ||: 1 trong 2 dk đúng (OR)
    !: đảo ngược lại giá trị của 1 mệnh dề (NOT)

#Array: Mảng

#Function: khai báo 1 hàm để có thể dùng lại trong quá trình code

