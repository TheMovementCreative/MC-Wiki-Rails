class LessonsController < ApplicationController
  before_action :set_lesson, only: [:show, :edit, :update, :destroy]
  load_and_authorize_resource

  # GET /lessons
  # GET /lessons.json
  def index
    if helpers.current_user_plan(current_user) == "none" || !helpers.is_sub_active(current_user.subscription.stripe_subscription_id)
      if !current_user.superadmin_role
      redirect_to pricing_index_path
      end
  end
    @lessons = Lesson.all
  end

  # GET /lessons/1
  # GET /lessons/1.json
  def show
    if helpers.current_user_plan(current_user) == "none" || !helpers.is_sub_active(current_user.subscription.stripe_subscription_id)
      if !current_user.superadmin_role
      redirect_to pricing_index_path
      end
  end
    lesson = Lesson.find(params[:id])

    if (helpers.show_auth(lesson, helpers.current_user_plan(current_user)))
    @lesson = lesson
    else
      redirect_to root_path
    end
  end

  # GET /lessons/new
  def new
    @lesson = Lesson.new
    @challenges = Challenge.all
  end

  # GET /lessons/1/edit
  def edit
  end

  # POST /lessons
  # POST /lessons.json
  def create
    @lesson = Lesson.new(lesson_params)

    respond_to do |format|
      if @lesson.save
        format.html { redirect_to @lesson, notice: 'Lesson was successfully created.' }
        format.json { render :show, status: :created, location: @lesson }
      else
        format.html { render :new }
        format.json { render json: @lesson.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /lessons/1
  # PATCH/PUT /lessons/1.json
  def update
    respond_to do |format|
      if @lesson.update(lesson_params)
        format.html { redirect_to @lesson, notice: 'Lesson was successfully updated.' }
        format.json { render :show, status: :ok, location: @lesson }
      else
        format.html { render :edit }
        format.json { render json: @lesson.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /lessons/1
  # DELETE /lessons/1.json
  def destroy
    @lesson.destroy
    respond_to do |format|
      format.html { redirect_to lessons_url, notice: 'Lesson was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lesson
      @lesson = Lesson.find(params[:id])
      @challenges = Challenge.all
    end

    # Only allow a list of trusted parameters through.
    def lesson_params
      params.require(:lesson).permit(:name, :author, :purpose, :tools, :warm_up, :details, :activities, :video_url, :image_url)
    end
end
