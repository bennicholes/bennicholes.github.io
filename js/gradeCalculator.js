function calc()
{

    var percent1 = convert(document.GradeCalc.Percent1.value);
    var percent2 = convert(document.GradeCalc.Percent2.value);
    var percent3 = convert(document.GradeCalc.Percent3.value);
    var percent4 = convert(document.GradeCalc.Percent4.value);
    var percent5 = convert(document.GradeCalc.Percent5.value);
    var percent6 = convert(document.GradeCalc.Percent6.value);
    var percent7 = convert(document.GradeCalc.Percent7.value);
    var percent8 = convert(document.GradeCalc.Percent8.value);
    var percent9 = convert(document.GradeCalc.Percent9.value);
    var percent10 = convert(document.GradeCalc.Percent10.value);

    TPercent = percent1 + percent2 + percent3 + percent4 + percent5 + percent6 + percent7 + percent8 + percent9 + percent10;

    document.GradeCalc.TotalPercent.value = TPercent;

    var g1 = convert(document.GradeCalc.Grade1.value);
    var g2 = convert(document.GradeCalc.Grade2.value);
    var g3 = convert(document.GradeCalc.Grade3.value);
    var g4 = convert(document.GradeCalc.Grade4.value);
    var g5 = convert(document.GradeCalc.Grade5.value);
    var g6 = convert(document.GradeCalc.Grade6.value);
    var g7 = convert(document.GradeCalc.Grade7.value);
    var g8 = convert(document.GradeCalc.Grade8.value);
    var g9 = convert(document.GradeCalc.Grade9.value);
    var g10 = convert(document.GradeCalc.Grade10.value);

    var FinalGrade = ((g1 * percent1 / 100) + (g2 * percent2 / 100) + (g3 * percent3 / 100) + (g4 * percent4 / 100) + (g5 * percent5 / 100) + (g6 * percent6 / 100) + (g7 * percent7 / 100) + (g8 * percent8 / 100) + (g9 * percent9 / 100) + (g10 * percent10 / 100)) * 100 / TPercent;

    document.GradeCalc.Grade.value = FinalGrade;
}

function convert(input)
{
    if (input == "")
        return 0;
    else
        return parseFloat(input);   
}
