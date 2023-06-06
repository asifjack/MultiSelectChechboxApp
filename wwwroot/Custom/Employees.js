$(document).ready(function () {
    $("#btnGet").click(function () {
        var empArr = [];
        $(".multiSelect").each(function (i, item) {
            if ($(item).is(":checked")) {
                let name = $(item).closest('tr').find('.empName').val();
                let id = $(item).closest('tr').find('.id').val();
                let obj = {};
                obj.Id = id;
                obj.Name = name;
                empArr.push(obj);
            }
        })
        if (empArr.length > 0) {
            AddEmp(empArr);
        }
    });
})

function AddEmp(empRecords) {
    $.ajax({
        type: 'POST',
        url: "/Home/AddEmployee",
        dataType: "json",
        data: { EmpModel: empRecords },
        success: function (res) {
            if (res) {
                alert("Record Added Successfully !..")
            }
        }
    })
}






