class TAQuestion{

    //Globals
    var log: Logger;
    var report: Report;
    var state: ReportState;
    var confirmit: ConfirmitFacade;
    var user: User;
    var project: Project;

    var questionDetails: Object;

    //TA Fields
    var verbatim: TAField;
    var overallSentiment: TAField;
    var categories: TAField;
    var positiveMentions: TAField;
    var negativeMentions: TAField;
    var categorySentiment: TAField;

    //TACategories
    var themes = [];
    var currentTheme = -1;

    /**
     * TAQuestion Constructor
     * @param {Logger} l - log
     * @param {Report} r - report
     * @param {ConfirmitFacade} c - confirmit
     * @param {User} u - user
     * @param {Object} questionObj - TAConfig.TAQuestions[i]
     */
    function TAQuestion(l: Logger, r: Report, c: ConfirmitFacade, u: User, questionObj: Object){
        //Globals
        log = l;
        report = r;
        confirmit = c;
        user = u;

        project = report.DataSource.GetProject(questionObj.TADatasourceId);

        questionDetails = questionObj;

        //TAFields
        verbatim = new TAField(questionDetails.TAQuestionName,project,"","");
        overallSentiment = new TAField(questionDetails.TAQuestionName,project,questionDetails.TAModelNo,"OverallSentiment");
        categories = new TAField(questionDetails.TAQuestionName,project,questionDetails.TAModelNo,"Categories");
        positiveMentions = new TAField(questionDetails.TAQuestionName,project,questionDetails.TAModelNo,"PositiveMentions");
        negativeMentions = new TAField(questionDetails.TAQuestionName,project,questionDetails.TAModelNo,"NegativeMentions");
        categorySentiment = new TAField(questionDetails.TAQuestionName,project,questionDetails.TAModelNo,"CategorySentiment");

        setupCategories();
    }
  
    function setupCategories(){
        var answers: Answer[] = categories.question.GetAnswers();
        var newObj: Object;
        for(var i=0; i<answers.Length; i++)
        {
           newObj = {id: answers[i].Precode, name: answers[i].Text};
           themes.push(newObj);
        }
    }

    /**
     * function to set current top Category from parameter
     * @param {Object} context - context object from page {component: page, pageContext: pageContext, log: log, report: report, state: state, confirmit: confirmit, user: user}
     */
    function setCurrentTheme(paramValue){
        if(paramValue){
            var themeId = paramValue;
            for(var i=0; i<themes.length;i++){
                if(themes[i].id == themeId){
                    currentTheme = i;
                    break;
                }
            }
        }else{
            currentTheme = -1;
        }
    }

}

class TAField{
    var questionName: String;
    var questionnaireElement: QuestionnaireElement;
    var question: Question;

    /**
     * TAField constructor
     * @param {String} qName - verbtim question name
     * @param {Project} project
     * @param {String} model - TA model id ("" for verbatim)
     * @param {String} postfix - TA field postfix("" for verbatim)
     */
    function TAField(qName: String, project: Project, model: String, postfix: String){
        questionName = qName+model+postfix;
        questionnaireElement = project.CreateQuestionnaireElement(questionName);
        question = project.GetQuestion(questionName);
    }
}