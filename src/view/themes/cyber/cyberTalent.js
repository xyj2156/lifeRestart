export default class CyberTalent extends CyberTalentUI {
    constructor() {
        super();
        this.btnDrawCard.on(Laya.Event.CLICK, this, this.onClickDrawCard);
        this.btnNext.on(Laya.Event.CLICK, this, this.onClickNext);
        this.listTalents.renderHandler = new Laya.Handler(this, this.renderTalent);
        this.listTalents.scrollBar.elasticDistance = 150;
    }

    #selected = new Set();

    init() {
        this.pageDrawCard.visible = true;
        this.pageResult.visible = false;
        this.btnNext.label = 'UI_Talent_Select_Uncomplete';
    }

    close() {}

    onClickDrawCard() {
        this.pageDrawCard.visible = false;
        this.pageResult.visible = true;
        this.listTalents.array = core.talentRandom();
    }

    onClickNext() {

    }

    onClickTalent() {

    }

    renderTalent(box, index) {
        const dataSource = box.dataSource;
        console.debug(index, dataSource, box);

        const hboxTitle = box.getChildByName("hboxTitle");
        const labTitle = hboxTitle.getChildByName("labTitle");
        const grades = hboxTitle.getChildByName("grades");
        const grade1 = grades.getChildByName("grade1");
        const grade2 = grades.getChildByName("grade2");
        const grade3 = grades.getChildByName("grade3");
        const labDescription = box.getChildByName("labDescription");
        const unselected = box.getChildByName("unselected");
        const selected = box.getChildByName("selected");


        switch (dataSource.grade) {
            case 1:
                grades.x = 0;
                labTitle.x = 1;
                grade1.visible = true;
                grade2.visible = false;
                grade3.visible = false;
                break;
            case 2:
                grades.x = 0;
                labTitle.x = 1;
                grade1.visible = false;
                grade2.visible = true;
                grade3.visible = false;
                break;
            case 3:
                grades.x = 0;
                labTitle.x = 1;
                grade1.visible = false;
                grade2.visible = false;
                grade3.visible = true;
                break;
            default:
                grades.x = 1;
                labTitle.x = 0;
                grade1.visible = false;
                grade2.visible = false;
                grade3.visible = false;
                break;
        }
        labTitle.text = dataSource.name;
        labTitle.event(Laya.Event.RESIZE);
        labDescription.text = dataSource.description;
        unselected.visible = !( selected.visible = this.#selected.has(index) );
        box.offAll(Laya.Event.CLICK);
        box.on(Laya.Event.CLICK, this, () => {
            if(this.#selected.has(index)) {
                this.#selected.delete(index);
            } else {
                if(this.#selected.size >= 3) {
                    return;
                }
                this.#selected.add(index);
            }

            this.btnNext.label = this.#selected.size === 3
                ? 'UI_Next'
                : 'UI_Talent_Select_Uncomplete';
            unselected.visible = !( selected.visible = this.#selected.has(index) );
        });
    }
}